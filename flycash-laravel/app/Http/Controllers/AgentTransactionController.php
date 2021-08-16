<?php

namespace App\Http\Controllers;
use Validator;
use App\Http\Requests\TransactionRequest;
use Illuminate\Http\Request;
use App\Models\Agentstransaction;
use App\Models\Agent;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class AgentTransactionController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\View\View
     */
        // Route::get('cashin', ['as' => 'pages.transaction.cashin', 'uses' => 'App\Http\Controllers\transactionController@cashin']);
		// Route::get('cashout', ['as' => 'pages.transaction.cashin', 'uses' => 'App\Http\Controllers\transactionController@cashout']);
		// Route::get('requestmoney', ['as' => 'pages.transaction.cashin', 'uses' => 'App\Http\Controllers\transactionController@requestmoney']);
		// Route::get('paybill', ['as' => 'pages.transaction.cashin', 'uses' => 'App\Http\Controllers\transactionController@paybill']);
		// Route::get('bkash', ['as' => 'pages.transaction.cashin', 'uses' => 'App\Http\Controllers\transactionController@bkash']);
		// Route::get('nagad', ['as' => 'pages.transaction.cashin', 'uses' => 'App\Http\Controllers\transactionController@nagad']);
		// Route::get('rocket', ['as' => 'pages.transaction.cashin', 'uses' => 'App\Http\Controllers\transactionController@rocket']);
		// Route::get('upay', ['as' => 'pages.transaction.cashin', 'uses' => 'App\Http\Controllers\transactionController@upay']);
		// Route::get('surecash', ['as' => 'pages.transaction.cashin', 'uses' => 'App\Http\Controllers\transactionController@surecash']);
		// Route::get('bankcard', ['as' => 'pages.transaction.cashin', 'uses' => 'App\Http\Controllers\transactionController@bankcard']);
    
//     public function cashin()
//     {
//         return view('pages.agent.transaction.cashin');
//     }
//     public function cashindone(TransactionRequest $req)
//     {
//         if($req-> amount >100)
//         {
//             if ($req->session()->get('password')==$req-> password){

//                 $email=$req->session()->get('email');
//                 $balance=$req->session()->get('balance');
//                 $agent = Agent::where('email',$email)
//                 ->first();
//                 $newbalance=$balance-$req-> amount;
//                 $balance=$newbalance;
            

//                 $req->session()->put('balance', $balance);

//                 $agent->balance = $balance;
//                 $agent->save();
//                 $transaction=new Agentstransaction();
//                 $transaction->phone=$req->phone;
//                 $transaction->email=$email;
//                 $transaction->transaction_type="Cash In";
//                 $transaction->amount=$req->amount;
//                 $transaction->balance = $balance;
//                 $transaction->date = now();
//                 $transaction->save();



//                 return back()->with('msg','Cash In Successfull') ;
//                 // return redirect('/agent-transactionconfirm');

//             }else{
//                 $req->session()->flash('msg', 'Incorrect Password');
//                 return redirect('/agent-cashin');
//             }
            

//         }else{
//             $req->session()->flash('msg', 'Transaction Failed For Invalid Amount');
//                 return redirect('/agent-cashin');
//         }
        
//     }


//     public function cashout()
//     {
//         return view('pages.agent.transaction.cashout');
//     }
//     public function cashoutdone(TransactionRequest $req)
//     {
//         if($req-> amount >100)
//         {
//             if ($req->session()->get('password')==$req-> password){

//                 $email=$req->session()->get('email');
//                 $balance=$req->session()->get('balance');
//                 $agent = Agent::where('email',$email)
//                 ->first();
//                 $newbalance=$balance-$req-> amount;
//                 $balance=$newbalance;
            

//                 $req->session()->put('balance', $balance);

//                 $agent->balance = $balance;
//                 $agent->save();
//                 $transaction=new Agentstransaction();
//                 $transaction->phone=$req->phone;
//                 $transaction->email=$email;
//                 $transaction->transaction_type="Cash Out";
//                 $transaction->amount=$req->amount;
//                 $transaction->balance = $balance;
//                 $transaction->date = now();
//                 $transaction->save();



//                 return back()->with('msg','Cash Out Successfull') ;

//             }else{
//                 $req->session()->flash('msg', 'Incorrect Password');
//                 return redirect('/agent-cashout');
//             }
            

//         }else{
//             $req->session()->flash('msg', 'Transaction Failed For Invalid Amount');
//                 return redirect('/agent-cashout');
//         }
        
//     }



//     public function requestmoney()
//     {
//         return view('pages.agent.transaction.requestmoney');
//     }
//     public function requestmoneydone(TransactionRequest $req)
//     {
//         if($req-> amount >100)
//         {
//             if ($req->session()->get('password')==$req-> password){

//                 $email=$req->session()->get('email');
//                 $balance=$req->session()->get('balance');
//                 $agent = Agent::where('email',$email)
//                 ->first();
//                 $newbalance=$balance+$req-> amount;
//                 $balance=$newbalance;
            

//                 $req->session()->put('balance', $balance);

//                 $agent->balance = $balance;
//                 $agent->save();
//                 $transaction=new Agentstransaction();
//                 $transaction->phone=$req->phone;
//                 $transaction->email=$email;
//                 $transaction->transaction_type="Request Money";
//                 $transaction->amount=$req->amount;
//                 $transaction->balance = $balance;
//                 $transaction->date = now();
//                 $transaction->save();



//                 return back()->with('msg','Request Successfull') ;

//             }else{
//                 $req->session()->flash('msg', 'Incorrect Password');
//                 return redirect('/agent-requestmoney');
//             }
            

//         }else{
//             $req->session()->flash('msg', 'Transaction Failed For Invalid Amount');
//                 return redirect('/agent-requestmoney');
//         }
        
//     }



//     public function paybill()
//     {
//         return view('pages.agent.transaction.paybill');
//     }
//     public function paybilldone(TransactionRequest $req)
//     {
//         if($req-> amount >100)
//         {
//             if ($req->session()->get('password')==$req-> password){

//                 $email=$req->session()->get('email');
//                 $balance=$req->session()->get('balance');
//                 $agent = Agent::where('email',$email)
//                 ->first();
//                 $newbalance=$balance-$req-> amount;
//                 $balance=$newbalance;
            

//                 $req->session()->put('balance', $balance);

//                 $agent->balance = $balance;
//                 $agent->save();
//                 $transaction=new Agentstransaction();
//                 $transaction->phone=$req->phone;
//                 $transaction->email=$email;
//                 $transaction->transaction_type="Pay Bill";
//                 $transaction->amount=$req->amount;
//                 $transaction->balance = $balance;
//                 $transaction->date = now();
//                 $transaction->save();



//                 return back()->with('msg','Bill Pay Successfull') ;

//             }else{
//                 $req->session()->flash('msg', 'Incorrect Password');
//                 return redirect('/agent-paybill');
//             }
            

//         }else{
//             $req->session()->flash('msg', 'Transaction Failed For Invalid Amount');
//                 return redirect('/agent-paybill');
//         }
        
//     }


//     public function bkash()
//     {
//         return view('pages.agent.transaction.bkash');
//     }
//     public function bkashdone(TransactionRequest $req)
//     {
//         if($req-> amount >100)
//         {
//             if ($req->session()->get('password')==$req-> password){

//                 $email=$req->session()->get('email');
//                 $balance=$req->session()->get('balance');
//                 $agent = Agent::where('email',$email)
//                 ->first();
//                 $newbalance=$balance+$req-> amount;
//                 $balance=$newbalance;
            

//                 $req->session()->put('balance', $balance);

//                 $agent->balance = $balance;
//                 $agent->save();
//                 $transaction=new Agentstransaction();
//                 $transaction->phone=$req->phone;
//                 $transaction->email=$email;
//                 $transaction->transaction_type="Add Money-Bkash";
//                 $transaction->amount=$req->amount;
//                 $transaction->balance = $balance;
//                 $transaction->date = now();
//                 $transaction->save();



//                 return back()->with('msg','Add Money-Bkash Successfull') ;

//             }else{
//                 $req->session()->flash('msg', 'Incorrect Password');
//                 return redirect('/agent-bkash');
//             }
            

//         }else{
//             $req->session()->flash('msg', 'Transaction Failed For Invalid Amount');
//                 return redirect('/agent-bkash');
//         }
        
//     }


//     public function nagad()
//     {
//         return view('pages.agent.transaction.nagad');
//     }
//     public function nagaddone(TransactionRequest $req)
//     {
//         if($req-> amount >100)
//         {
//             if ($req->session()->get('password')==$req-> password){

//                 $email=$req->session()->get('email');
//                 $balance=$req->session()->get('balance');
//                 $agent = Agent::where('email',$email)
//                 ->first();
//                 $newbalance=$balance+$req-> amount;
//                 $balance=$newbalance;
            

//                 $req->session()->put('balance', $balance);

//                 $agent->balance = $balance;
//                 $agent->save();
//                 $transaction=new Agentstransaction();
//                 $transaction->phone=$req->phone;
//                 $transaction->email=$email;
//                 $transaction->transaction_type="Add Money-Nagad";
//                 $transaction->amount=$req->amount;
//                 $transaction->balance = $balance;
//                 $transaction->date = now();
//                 $transaction->save();



//                 return back()->with('msg','Add Money-Nagad Successfull') ;

//             }else{
//                 $req->session()->flash('msg', 'Incorrect Password');
//                 return redirect('/agent-nagad');
//             }
            

//         }else{
//             $req->session()->flash('msg', 'Transaction Failed For Invalid Amount');
//                 return redirect('/agent-nagad');
//         }
        
//     }


//     public function rocket()
//     {
//         return view('pages.agent.transaction.rocket');
//     }
//     public function rocketdone(TransactionRequest $req)
//     {
//         if($req-> amount >100)
//         {
//             if ($req->session()->get('password')==$req-> password){

//                 $email=$req->session()->get('email');
//                 $balance=$req->session()->get('balance');
//                 $agent = Agent::where('email',$email)
//                 ->first();
//                 $newbalance=$balance+$req-> amount;
//                 $balance=$newbalance;
            

//                 $req->session()->put('balance', $balance);

//                 $agent->balance = $balance;
//                 $agent->save();
//                 $transaction=new Agentstransaction();
//                 $transaction->phone=$req->phone;
//                 $transaction->email=$email;
//                 $transaction->transaction_type="Add Money-Rocket";
//                 $transaction->amount=$req->amount;
//                 $transaction->balance = $balance;
//                 $transaction->date = now();
//                 $transaction->save();



//                 return back()->with('msg','Add Money-Rocket Successfull') ;

//             }else{
//                 $req->session()->flash('msg', 'Incorrect Password');
//                 return redirect('/agent-rocket');
//             }
            

//         }else{
//             $req->session()->flash('msg', 'Transaction Failed For Invalid Amount');
//                 return redirect('/agent-rocket');
//         }
        
//     }


//     public function upay()
//     {
//         return view('pages.agent.transaction.upay');
//     }
//     public function upaydone(TransactionRequest $req)
//     {
//         if($req-> amount >100)
//         {
//             if ($req->session()->get('password')==$req-> password){

//                 $email=$req->session()->get('email');
//                 $balance=$req->session()->get('balance');
//                 $agent = Agent::where('email',$email)
//                 ->first();
//                 $newbalance=$balance+$req-> amount;
//                 $balance=$newbalance;
            

//                 $req->session()->put('balance', $balance);

//                 $agent->balance = $balance;
//                 $agent->save();
//                 $transaction=new Agentstransaction();
//                 $transaction->phone=$req->phone;
//                 $transaction->email=$email;
//                 $transaction->transaction_type="Add Money-Upay";
//                 $transaction->amount=$req->amount;
//                 $transaction->balance = $balance;
//                 $transaction->date = now();
//                 $transaction->save();



//                 return back()->with('msg','Add Money-Upay Successfull') ;

//             }else{
//                 $req->session()->flash('msg', 'Incorrect Password');
//                 return redirect('/agent-upay');
//             }
            

//         }else{
//             $req->session()->flash('msg', 'Transaction Failed For Invalid Amount');
//                 return redirect('/agent-upay');
//         }
        
//     }


//     public function surecash()
//     {
//         return view('pages.agent.transaction.surecash');
//     }
//     public function surecashdone(TransactionRequest $req)
//     {
//         if($req-> amount >100)
//         {
//             if ($req->session()->get('password')==$req-> password){

//                 $email=$req->session()->get('email');
//                 $balance=$req->session()->get('balance');
//                 $agent = Agent::where('email',$email)
//                 ->first();
//                 $newbalance=$balance+$req-> amount;
//                 $balance=$newbalance;
            

//                 $req->session()->put('balance', $balance);

//                 $agent->balance = $balance;
//                 $agent->save();
//                 $transaction=new Agentstransaction();
//                 $transaction->phone=$req->phone;
//                 $transaction->email=$email;
//                 $transaction->transaction_type="Add Money-Sure Cash";
//                 $transaction->amount=$req->amount;
//                 $transaction->balance = $balance;
//                 $transaction->date = now();
//                 $transaction->save();



//                 return back()->with('msg','Add Money-Sure Cash Successfull') ;

//             }else{
//                 $req->session()->flash('msg', 'Incorrect Password');
//                 return redirect('/agent-surecash');
//             }
            

//         }else{
//             $req->session()->flash('msg', 'Transaction Failed For Invalid Amount');
//                 return redirect('/agent-surecash');
//         }
        
//     }


//     public function bankcard()
//     {
//         return view('pages.agent.transaction.bankcard');
//     }
//     public function bankcarddone(TransactionRequest $req)
//     {
//         if($req-> amount >100)
//         {
//             if ($req->session()->get('password')==$req-> password){

//                 $email=$req->session()->get('email');
//                 $balance=$req->session()->get('balance');
//                 $agent = Agent::where('email',$email)
//                 ->first();
//                 $newbalance=$balance+$req-> amount;
//                 $balance=$newbalance;
            

//                 $req->session()->put('balance', $balance);

//                 $agent->balance = $balance;
//                 $agent->save();
//                 $transaction=new Agentstransaction();
//                 $transaction->phone=$req->phone;
//                 $transaction->email=$email;
//                 $transaction->transaction_type="Add Money-Card";
//                 $transaction->amount=$req->amount;
//                 $transaction->balance = $balance;
//                 $transaction->date = now();
//                 $transaction->save();



//                 return back()->with('msg','Add Money-Card Successfull') ;

//             }else{
//                 $req->session()->flash('msg', 'Incorrect Password');
//                 return redirect('/agent-bankcard');
//             }
            

//         }else{
//             $req->session()->flash('msg', 'Transaction Failed For Invalid Amount');
//                 return redirect('/agent-bankcard');
//         }
        
//     }


//     public function recharge()
//     {
//         return view('pages.agent.transaction.recharge');
//     }
//     public function rechargedone(TransactionRequest $req)
//     {
//         if($req-> amount >9)
//         {
//             if ($req->session()->get('password')==$req-> password){

//                 $email=$req->session()->get('email');
//                 $balance=$req->session()->get('balance');
//                 $agent = Agent::where('email',$email)
//                 ->first();
//                 $newbalance=$balance-$req-> amount;
//                 $balance=$newbalance;
            

//                 $req->session()->put('balance', $balance);

//                 $agent->balance = $balance;
//                 $agent->save();
//                 $transaction=new Agentstransaction();
//                 $transaction->phone=$req->phone;
//                 $transaction->email=$email;
//                 $transaction->transaction_type="Recharge";
//                 $transaction->amount=$req->amount;
//                 $transaction->balance = $balance;
//                 $transaction->date = now();
//                 $transaction->save();



//                 return back()->with('msg','Recharge Successfull') ;

//             }else{
//                 $req->session()->flash('msg', 'Incorrect Password');
//                 return redirect('/agent-recharge');
//             }
            

//         }else{
//             $req->session()->flash('msg', 'Transaction Failed For Invalid Amount');
//                 return redirect('/agent-recharge');
//         }
        
//     }


//     public function addmoney()
//     {
//         return view('pages.agent.addmoney');
//     }


//     public function transactionlist()
//     {
        
//         $transaction=Agentstransaction::all();

//         return view('pages.agent.transactionlist')->with('transaction',$transaction);
//     }


//     public function notifications()
//     {
//         return view('pages.notifications');
//     }
//     public function upgrade()
//     {
//         return view('pages.upgrade');
//     }
//     public function feedback()
//     {
//         return view('pages.agent.feedback');
//     }
//     public function adduser()
//     {
//         return view('pages.agent.adduser');
//     }
//     public function view()
//     {
//         return view('pages.agent.view');
//     }
//     public function chat()
//     {
//         return view('pages.agent.chat');
//     }
//     public function transactionconfirm()
//     {
//         return view('pages.agent.transaction.transactionconfirm');
//     }
//     public function transactioncancle()
//     {
//         return view('pages.agent.transaction.transactioncancle');
//     }
// }
    public function index()
    {
        $email='Borno@gmail.com';
        $agent= DB::table('agentstransactions')->where('email', '=', $email)->get();

        return response()->json($agent);
    }

    public function test(TransactionRequest $req)
    {
        $a = $req->phone;
        return response()->json([
            'status' => 240,
            'message' => $a,
        ]);
    }


    public function AgentTransactionProcces(TransactionRequest $req)
    {

        $status = Agent::where('email', $req->email)
            ->where('password', $req->password)
            ->first();
        $transaction_type = $req->transaction_type;
        $email = $req->email;
        $phone = $req->phone;

        $balance = $status->balance;
        $amount = $req->amount;

        if ($status) {
            if ($transaction_type == "Add Money") {

                $agent = Agent::where('email', $email)
                    ->first();
                $newbalance = $balance + $req->amount;
                $balance = $newbalance;

                $agent->balance = $balance;
                $agent->save();

                $transaction = new Agentstransaction();
                $transaction->phone = $phone;
                $transaction->email = $email;
                $transaction->transaction_type = $transaction_type;
                $transaction->amount = $amount;
                $transaction->balance = $balance;
                $transaction->date = now();
                $transaction->save();
                if ($transaction) {
                    $agent = Agent::where('email', $email)
                        ->first();
                    return response()->json([
                        'status' => 240,
                        'user_status' => $agent,
                        'message' => "Transaction Successfull",

                    ]);

                } else {

                    return response()->json([
                        'status' => 240,
                        "balance" => $balance,
                        'message' => "Transaction Unuccessfull",
                    ]);

                }

            } elseif ($transaction_type == "Cash out" || $transaction_type == "Payment" || $transaction_type == "Donate" || $transaction_type == "Mobile Recharge" || $transaction_type == "Send Money" || $transaction_type == "Transfer money" ||$transaction_type == "Buy Tickets") {

                $agent = Agent::where('email', $email)
                    ->first();
                $newbalance = $balance - $req->amount;
                $balance = $newbalance;

                $agent->balance = $balance;
                $agent->save();

                $transaction = new Agentstransaction();
                $transaction->phone = $phone;
                $transaction->email = $email;
                $transaction->transaction_type = $transaction_type;
                $transaction->amount = $amount;
                $transaction->balance = $balance;
                $transaction->date = now();
                $transaction->save();
                if ($transaction) {
                    $agent = Agent::where('email', $email)
                        ->first();
                    return response()->json([
                        'status' => 240,
                        'user_status' => $agent,
                        'message' => "Transaction Successfull",

                    ]);

                } else {

                    return response()->json([
                        'status' => 240,
                        "balance" => $balance,
                        'message' => "Transaction Unuccessfull",
                    ]);

                }

            }else{
                return response()->json([
                    'status' => 240,
                    'message' => "unknown error",
                ]);

            }

            

        } else {

            return response()->json([
                'status' => 240,
                'message' => "password does not match",
            ]);

        }

    }
}










