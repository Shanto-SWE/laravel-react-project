<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use\App\Models\courseFeatureModel;
use\App\Models\coursePlanModel;
use\App\Models\paymentGuideModel;
use\App\Models\freeClassModel;
use\App\Models\moreSeriesModel;


class HomeIndex extends Controller
{
    function getCourseFeature(){

        $result=courseFeatureModel::all();
        return $result;

    }
    function getCoursePlan(){

        $result=coursePlanModel::all();
        return $result;

    }
    function getPaymetnGuide(){

        $result=paymentGuideModel::all();
        return $result;

    }
    function getFreeClass(){

        $result=freeClassModel::all();
        return $result;

    }
    function getMoreSeries(){

        $result=moreSeriesModel::all();
        return $result;

    }
}
