<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Officer;

use App\Models\Customer;
use App\Models\Campaign;
use App\Models\Agentstransactions;



use Validator;
use App\Http\Requests\EditProfileRequest;
use App\Models\Admin;
use App\Models\Agent;
use Illuminate\Support\Facades\DB;

class AdminController extends Controller
{
    public function ongoingCampaign()
    {

        $Campaign= DB::table('campaigns')->get();
        return response()->json($Campaign);
       
    }

    public function addCampaign()
    {
        $title='project';
        $campaign=   Campaign:: where ('title',$title)->get();
        // $campaign->title=$req-> input('title');
        // $campaign->sdate=$req-> input('sdate');

        // $campaign->edate=$req-> input('edate');

        // $campaign->image=$req-> file('image')->store('campaigns');

        // return $campaign;

        return response()-> json([

            "message"=>$campaign,
            "status"=>'200'

        ]);




    }

    public function agentAddMoney(Request $req){

        $validity_status = Admin::where('email', $req->email)
        ->where('password', $req->password)
        ->first();
        if ($validity_status){
            $checkAgent = Agent::where('phone', $req->phone)
            ->first();
            $balance=$checkAgent->balance;
            if($checkAgent){
                $newbalance= $balance+ $req->amount;
                $balance=$newbalance;
                $checkAgent->balance=$balance;
               $checkAgent->save();

               $transaction = new Agentstransactions();
               $transaction->phone = $req->phone;
               $transaction->email = $req->email;
               $transaction->transaction_type = $req->transaction_type;
               $transaction->amount = $req->amount;
               $transaction->balance = $balance;
               $transaction->date = now();
               $transaction->save();
               if ($transaction) {
                
                return response()->json([
                    'status' => 240,
                    'message' => "Transaction Successfull"
                ]);

            } else {

                return response()->json([
                    'status' => 240,
                    'message' => "Transaction Unuccessfull",
                ]);

            }

            }else{
                return response()->json([
                    'status' => 240,
                    'message' => "server error "
                ]);
            }


        }else{
            return response()->json([
                'status' => 240,
                'message' => "password invalid",

            ]);
        }

    }

   
}
