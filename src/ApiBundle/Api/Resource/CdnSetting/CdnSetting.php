<?php

namespace ApiBundle\Api\Resource\CdnSetting;

use ApiBundle\Api\Annotation\Access;
use ApiBundle\Api\ApiRequest;
use ApiBundle\Api\Resource\AbstractResource;

class CdnSetting extends AbstractResource
{
    /**
     * @return array
     * @Access(roles="ROLE_ADMIN,ROLE_SUPER_ADMIN")
     */
    public function add(ApiRequest $request)
    {
        $data = $request->request->all();
        $cdn = array(
            'enabled' => $data['enabled'],
            'defaultUrl' => $data['default_url'],
            'userUrl' => $data['user_url'],
            'contentUrl' => $data['content_url'],
        );

        $this->getSettingService()->set('cdn', $cdn);
        return array('code' => 'success', 'msg' => "设置cdn, enabled:{$cdn['enabled']}, defaultUrl:{$cdn['defaultUrl']},userUrl:{$cdn['userUrl']}, contentUrl:{$cdn['contentUrl']}");
    }

    /**
     * @return \Biz\System\Service\SettingService
     */
    private function getSettingService()
    {
        return $this->service('System:SettingService');
    }
}
