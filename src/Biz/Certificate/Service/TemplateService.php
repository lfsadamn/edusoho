<?php

namespace Biz\Certificate\Service;

interface TemplateService
{
    public function get($id);

    public function create($fields);

    public function update($id, $fields);

    public function updateBaseMap($id, $fileId);

    public function updateStamp($id, $fileId);

    public function count($conditions);

    public function search($conditions, $orderBys, $start, $limit, $columns = []);

    public function dropTemplate($id);
}
