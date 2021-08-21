<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Officer;
use App\Models\Customer;
use App\Models\Agent;
use App\Models\Agentstransaction;
use Validator;
use App\Http\Requests\EditProfileRequest;
use Illuminate\Support\Facades\DB;

class AgentProfileController extends Controller
{
    public function updateAgentProfile(Request $req)
    {
        $validator = Validator::make($req->all(), [
            'name' => 'required|min:3|max:30',
            'phone' => 'required|min:11|numeric',
        ]);

            if ($validator->fails()) {
                return response()->json([
                    'error'=> $validator->errors(),
                ]);
            }else{
                $agent= Agent::where('email',$req->email)
                ->first();
                $agent->phone = $req->phone;
                $agent->name = $req->name;
                $agent->save();
                if($agent){
                    $newData = Agent::where('email', $req->email)
                    ->first();
                    return response()->json([
                        'status' => 200,
                        'user_status' => $newData,
                        'message' => "Profile Updated",
                    ]);
                }
                else{
                    return response()->json([
                        'status' => 240,
                        'message' => "Error",
                    ]);

                }
            }
       
    }
}    