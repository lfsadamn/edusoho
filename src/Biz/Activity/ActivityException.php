<?php

namespace Biz\Activity;

use AppBundle\Common\Exception\AbstractException;

class ActivityException extends AbstractException
{
    const EXCEPTION_MODUAL = 24;

    const WATCH_LIMIT = 4032401;

    const NOTFOUND_ACTIVITY = 4042402;

    const LIVE_OVERLAP_TIME = 5002403;

    public $messages = array(
        4032401 => 'exception.activity.watch_video_limit',
        4042402 => 'exception.activity.not_found',
        5002403 => 'activity.live.overlap_time_notice',
    );
}
