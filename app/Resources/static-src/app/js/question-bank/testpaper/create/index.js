import { delHtmlTag } from 'common/utils';
import BatchSelect from '../../../../common/widget/batch-select';

class TestpaperForm {
  constructor($form) {
    this.$form = $form;
    this.$description = this.$form.find('[name="description"]');
    this.validator = null;
    this.difficultySlider = null;
    this.scoreSlider = null;
    this.$scoreModal = $('.js-score-modal');
    this.$modal = $('#testpaper-confirm-modal');
    this.questions = [];
    this.questionsCount = 0;
    this.$typeNav = this.$form.find('#testpaper-question-nav');
    new BatchSelect($('#testpaper-items-manager'));
    this._initEvent();
    this._initValidate();
    this._initScoreValidator();
  }

  _initEvent() {
    this.$form.on('click', '.js-request-save', event => this._confirmSave(event));
    this.$modal.on('click','.js-confirm-submit',event => this._submitSave(event));
    this.$typeNav.on('click', 'li', event => this._changeNav(event));
    this.$form.on('click', '[data-role="item-delete-btn"]', event=>this.deleteQuestion(event));
    this.$form.on('click', '[data-role="batch-delete-btn"]', event=>this.batchDelete(event));
    this.$form.on('click', '[data-role="set-score-btn"]', event=>this.showScoreModal(event));
    this.$form.on('lengthChange','[data-role="question-body"]', event => this.changeQuestionCount(event));
    this.$scoreModal.on('click', '.js-batch-score-confirm', event => this.batchSetScore(event));
  }

  _confirmSave() {
    let isOk = this._validateScore();

    if (!isOk) {
      return ;
    }

    this.questionsCount = 0;
    this.questions = [];
    let stats = this._calTestpaperStats();

    let html='';
    $.each(stats, function(index, statsItem){
      let tr = '<tr>';
      tr += '<td>' + statsItem.name + '</td>';
      tr += '<td>' + statsItem.count + '</td>';
      tr += '<td>' + statsItem.score.toFixed(1) + '</td>';
      tr += '</tr>';
      html += tr;
    });

    this.$modal.find('.detail-tbody').html(html);

    this.$modal.modal('show');
  }

  _calTestpaperStats() {
    let stats = {};
    let self = this;

    this.$typeNav.find('li').each(function() {
      let type = $(this).find('a').data('type'),
        name = $(this).find('a').data('name');


      stats[type] = {name:name, count:0, score:0, missScore:0};

      self.$element.find('#testpaper-table-'+type).find('.js-question-score').each(function() {
        let itemType = $(this).closest('tr').data('type');
        let score = itemType == 'material' ? 0 : parseFloat($(this).val());
        let question = {};

        if (itemType != 'material') {
          stats[type]['count'] ++;
        }

        stats[type]['score'] += score;

        let missScore = 0;
        if ($(this).closest('js-miss-score').length > 0) {
          missScore = parseFloat($(this).closest('js-miss-score').data('miss-score'));
        }

        stats[type]['missScore'] = missScore;

        let questionId = $(this).closest('tr').data('id');

        question['id'] = questionId;
        question['score'] = score;
        question['missScore'] = missScore;
        question['type'] = type;

        self.questions.push(question);
      });
    });

    let total = {name:Translator.trans('activity.testpaper_manage.question_total_score'), count:0, score:0};
    $.each(stats, function(index, statsItem) {
      total.count += statsItem.count;
      total.score += statsItem.score;
    });

    stats.total = total;
    self.questionsCount = total.count;

    return stats;
  }

  _validateScore() {
    let isOk = true;

    if (this.$form.find('.js-question-score').length == 0) {
      cd.message({type: 'danger', message: Translator.trans('activity.testpaper_manage.question_required_error_hint') });
      isOk = false;
    }

    this.$form.find('.js-question-score').each(function() {
      var score = $(this).data('score');

      if (score == '0') {
        cd.message({type: 'danger', message: Translator.trans('activity.testpaper_manage.question_score_empty_hint') });
        isOk = false;
      }

      if (!/^(([1-9]{1}\d{0,2})|([0]{1}))(\.(\d){1})?$/.test(score)) {
        cd.message({type: 'danger', message: Translator.trans('activity.testpaper_manage.question_score_error_hint') });
        isOk = false;
      }
    });

    return isOk;
  }

  _changeNav(event) {
    let $target = $(event.currentTarget);
    let type = $target.children().data('type');
    this.currentType = type;

    this.$typeNav.find('li').removeClass('active');
    $target.addClass('active');

    this.$form.find('.js-question-table').addClass('hide');
    this.$form.find('#testpaper-table-'+type).removeClass('hide');
    this.$form.find('[data-role="batch-select"]').prop('checked',false);
    this.$form.find('[data-role="batch-item"]').prop('checked',false);
  }

  deleteQuestion(event) {
    event.stopPropagation();
    let $target = $(event.currentTarget);
    let id = $target.closest('tr').data('id');
    let $tbody =  $target.closest('tbody');
    $tbody.find('[data-parent-id="'+id+'"]').remove();
    $target.closest('tr').remove();
    $tbody.trigger('lengthChange');
    this.refreshSeqs();
  }

  batchDelete(event) {
    let $target = $(event.currentTarget);
    let $tbody =  $target.parents('.js-question-table').find('tbody');
    let self = this;

    this.$form.find('[data-role="batch-item"]:checked').each(function(index,item){
      let questionId = $(this).val();

      if ($(this).closest('tr').data('type') == 'material') {
        self.$form.find('[data-parent-id="'+questionId+'"]').remove();
      }
      $(this).closest('tr').remove();

    });
    $tbody.trigger('lengthChange');
  }

  showScoreModal(event) {
    if (this.$form.find('[data-role="batch-item"]:checked').length > 0) {
      let self = this;
      var types = ['choice', 'uncertain_choice'];
      this.$form.find('[data-role="batch-item"]:checked').each(function(index,item){
        if ($.inArray($(this).closest('tr').data('type'), types) != -1) {
          self.$scoreModal.find('.js-miss-score-field').removeClass('hidden');
        }
      });
      this.$scoreModal.modal('show');
    }
  }

  batchSetScore(event) {
    if (this.scoreValidator.form()) {
      let self = this;
      let score = parseFloat(this.$scoreModal.find('input[name="score"]').val());
      let missScore = parseFloat(this.$scoreModal.find('input[name="missScore"]').val());
      let scoreObj = {
        score: score,
        missScore: missScore,
      };
      this.$form.find('[data-role="batch-item"]:checked').each(function() {
        let questionId = $(this).val();

        if ($(this).closest('tr').data('type') == 'material') {
          self.$form.find('[data-parent-id="'+questionId+'"]').each(function () {
            self.setScore($(this), scoreObj);
          });
        } else {
          self.setScore($(this).parents('tr'), scoreObj);
        }
      });

      cd.message({ type: 'success', message: Translator.trans('subject.score_update_success') });
      this.$scoreModal.modal('hide');
    }
  }

  setScore($item, scoreObj) {
    let $scoreItem = $item.find('.js-question-score');
    $scoreItem.text(scoreObj.score);
    $scoreItem.attr('data-score', scoreObj.score);
    if ($item.find('.js-miss-score').length > 0) {
      let $missScoreItem = $item.find('.js-miss-score');
      $missScoreItem.text(scoreObj.missScore);
      $missScoreItem.attr('data-miss-score', scoreObj.missScore);
    }
  }

  refreshSeqs() {
    let seq = 1;
    this.$form.find('tbody tr').each(function(){
      let $tr = $(this);

      if (!$tr.hasClass('have-sub-questions')) {
        $tr.find('td.seq').html(seq);
        seq ++;
      }
    });

    this.$form.find('[name="questionLength"]').val((seq - 1) > 0 ? (seq - 1 ) : null );
  }

  changeQuestionCount(event) {
    let $target = $(event.currentTarget);
    let type = $target.data('type');
    let count = 0;
    if (type == 'material') {
      count = $target.find('tr.is-sub-question').length;
    } else {
      count = $target.find('tr').length;
    }
    $('.js-count-' + type).html('(' + count + ')');
  }

  _initEditor(validator) {
    let editor = CKEDITOR.replace(this.$description.attr('id'), {
      toolbar: 'Simple',
      fileSingleSizeLimit: app.fileSingleSizeLimit,
      filebrowserImageUploadUrl: this.$description.data('imageUploadUrl'),
      height: 100
    });
    editor.on('change', () => {
      this.$description.val(delHtmlTag(editor.getData()));
    });
    editor.on('blur', () => {
      this.$description.val(delHtmlTag(editor.getData()));
      validator.form();
    });
  }

  _initValidate() {
    this.validator = this.$form.validate({
      rules: {
        name: {
          required: true,
          maxlength: 50,
          trim: true,
        },
        description: {
          maxlength: 500,
          trim: true,
        },
      },
      messages: {
        name: {
          required: Translator.trans('activity.testpaper_manage.input_title_hint'),
          maxlength: Translator.trans('site.maxlength_hint',{length: 50})
        },
        description: {
          required: Translator.trans('activity.testpaper_manage.input_description_hint'),
          maxlength: Translator.trans('site.maxlength_hint',{length: 500})
        },
      }
    });
    this._initEditor(this.validator);
  }

  _initScoreValidator() {
    this.scoreValidator = $('#batch-set-score-form').validate({
      onkeyup: false,
      rules: {
        score: {
          required: true,
          max: 999,
          min: 0,
          es_score: true
        },
        missScore: {
          required: false,
          max: 999,
          min: 0,
          noMoreThan: '#score',
          es_score: true
        }
      },
      messages: {
        missScore: {
          noMoreThan: Translator.trans('subject.miss_score_no_more_than_score'),
        }
      }
    });

    $.validator.addMethod( 'noMoreThan', function(value, element, param) {
      if (value == '') {
        return true;
      } else {
        return parseFloat(value) <= parseFloat($(param).val());
      }
    }, 'Please enter a lesser value.' );
  }

  _submitSave(event) {
    let $target = $(event.currentTarget);
    let status = this.validator.form();

    if (!status) {
      return;
    }

    if(this.questionsCount > 2000){
      notify('danger', Translator.trans('activity.testpaper_manage.questions_length_hint'));
      return;
    }

    let questionTypeSeq = [];
    $("input[name='questionTypeSeq']").each(function(){
      questionTypeSeq.push($(this).val());
    });

    $target.button('loading').addClass('disabled');
    $.post($target.data('checkUrl'),this.$form.serialize(),result => {
      if (result.status == 'no') {
        $('.js-build-check').html(Translator.trans('activity.testpaper_manage.question_num_error'));
      } else {
        $('.js-build-check').html('');

        $target.button('loading').addClass('disabled');
        this.$form.submit();
      }
    });

    let baseInfo = this.$form.find('[data-info="base"]').serialize();
    let questionInfo = {
      questions: JSON.stringify(this.questions),
      questionTypeSeq: JSON.stringify(questionTypeSeq)
    }

    $.post(this.$form.data('url'),{baseInfo: baseInfo, questionInfo: questionInfo},function(result) {
      if (result.goto) {
        window.location.href = result.goto;
      }
    });
  }
}

new TestpaperForm($('#testpaper-form'));

