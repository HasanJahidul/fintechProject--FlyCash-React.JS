<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\TransactionRequest;
use App\Models\Customerstransaction;
use App\Models\Customer;
use App\Models\Agent;

class CustomerTransactionController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\View\View
     */

     
    
    //========================================Add Money=========================================
    
    public function addmoney()
    {
        return view('pages.customer.transaction.addmoney');
    }public function addmoneydone(TransactionRequest $req)
    {
        if($req-> amount >97)
        {
            if ($req->session()->get('password')==$req-> password){

                $email=$req->session()->get('email');
                $balance=$req->session()->get('balance');
                $customer = Customer::where('email',$email)
                ->first();
                $newbalance=$balance+$req-> amount;
                $balance=$newbalance;
            

                $req->session()->put('balance', $balance);

                $customer->balance = $balance;
                $customer->save();
                $transaction=new Customerstransaction();
                $transaction->phone=$req->phone;
                $transaction->email=$email;
                $transaction->transaction_type="Add Money";
                $transaction->amount=$req->amount;
                $transaction->balance = $balance;
                $transaction->date = now();
                $transaction->save();



                return back()->with('msg','Addmoney Successfull') ;

            }else{
                
                return back()->with('err','Incorrect Password') ;
            }
            

        }else{
            return back()->with('err','Add money Unsuccessfull') ;
        }
        
    }

    
    //========================================Send Money=========================================
    
    public function sendmoney()
    {
        return view('pages.customer.transaction.sendmoney');
    }
    public function sendmoneydone(TransactionRequest $req)
    {
        if($req-> amount >100)
        {
            if ($req->session()->get('password')==$req-> password){

                $email=$req->session()->get('email');
                $balance=$req->session()->get('balance');
                $customer = Customer::where('email',$email)
                ->first();
                $newbalance=$balance-$req-> amount;
                $balance=$newbalance;
            

                $req->session()->put('balance', $balance);

                $customer->balance = $balance;
                $customer->save();
                $transaction=new Customerstransaction();
                $transaction->phone=$req->phone;
                $transaction->email=$email;
                $transaction->transaction_type="Send Money";
                $transaction->amount=$req->amount;
                $transaction->balance = $balance;
                $transaction->date = now();
                $transaction->save();



                return back()->with('msg','Send Money Successfull') ;

            }else{
                return back()->with('err','Incorrect Password') ;
            }
            

        }else{
            return back()->with('err','Send Money Unsuccessfull') ;
        
    }
}

    //========================================Cashout=========================================

    public function cashout()
    {
        return view('pages.customer.transaction.cashout');
    }
   
    public function cashoutdone(TransactionRequest $req)
    {
        if($req-> amount >100)
        {
            $status = Agent::where('phone',$req->phone)
            ->first();
            //dd($status);
            

                if ($req->session()->get('password')==$req-> password){
                    if($status){

                    $email=$req->session()->get('email');
                    $balance=$req->session()->get('balance');
                    $customer = Customer::where('email',$email)
                    ->first();
                    $newbalance=$balance-$req-> amount;
                    $balance=$newbalance;
                
    
                    $req->session()->put('balance', $balance);
    
                    $customer->balance = $balance;
                    $customer->save();
                    $transaction=new Customerstransaction();
                    $transaction->phone=$req->phone;
                    $transaction->email=$email;
                    $transaction->transaction_type="Cash out";
                    $transaction->amount=$req->amount;
                    $transaction->balance = $balance;
                    $transaction->date = now();
                    $transaction->save();
    
    
    
                    return back()->with('msg','Cashout Successfull') ;

                }else{
                    return back()->with('err','Incorrect Agent Number') ;
    
                }
    
                }else{
                    return back()->with('err','Incorrect Password') ;
                }

            
        }else{
            return back()->with('err','Minimum Cashout amount 100 Taka') ;
        }
    }


    //========================================Pay BILl=========================================


    public function paybill()
    {
        return view('pages.customer.transaction.paybill');
    }
    public function paybilldone(TransactionRequest $req)
    {
        if($req-> amount >1)
        {
            

                if ($req->session()->get('password')==$req-> password){
                   

                    $email=$req->session()->get('email');
                    $balance=$req->session()->get('balance');
                    $customer = Customer::where('email',$email)
                    ->first();
                    $newbalance=$balance-$req-> amount;
                    $balance=$newbalance;
                
    
                    $req->session()->put('balance', $balance);
    
                    $customer->balance = $balance;
                    $customer->save();
                    $transaction=new Customerstransaction();
                    $transaction->phone=$req->phone;
                    $transaction->email=$email;
                    $transaction->transaction_type="Payment";
                    $transaction->amount=$req->amount;
                    $transaction->balance = $balance;
                    $transaction->date = now();
                    $transaction->save();
    
    
    
                    return back()->with('msg','Payment Successfull') ;

               
    
                }else{
                    return back()->with('err','Incorrect Password') ;
                }

            
        }else{
            return back()->with('err','Minimum Payment amount 1 Taka') ;
        }

    }

    //========================================recharge=========================================
    public function recharge()
    {
        return view('pages.customer.transaction.recharge');
    } 
    public function rechargedone(TransactionRequest $req)
    {
        if($req-> amount >9)
        {
                if ($req->session()->get('password')==$req-> password){
                   

                    $email=$req->session()->get('email');
                    $balance=$req->session()->get('balance');
                    $customer = Customer::where('email',$email)
                    ->first();
                    $newbalance=$balance-$req-> amount;
                    $balance=$newbalance;
                
    
                    $req->session()->put('balance', $balance);
    
                    $customer->balance = $balance;
                    $customer->save();
                    $transaction=new Customerstransaction();
                    $transaction->phone=$req->phone;
                    $transaction->email=$email;
                    $transaction->transaction_type="Mobile Recharge";
                    $transaction->amount=$req->amount;
                    $transaction->balance = $balance;
                    $transaction->date = now();
                    $transaction->save();
    
    
    
                    return back()->with('msg','Mobile Recharge Successfull') ;

                
    
                }else{
                    return back()->with('err','Incorrect Password') ;
                }

            
        }else{
            return back()->with('err','Minimum Payment amount 10 Taka') ;
        }
    }
    //========================================TransferMoney=========================================
    public function transfermoney()
    {
        return view('pages.customer.transaction.transfermoney');
    }
    public function transfermoneydone(TransactionRequest $req)
    {
        if($req-> amount >1000)
        {
                if ($req->session()->get('password')==$req-> password){
                   

                    $email=$req->session()->get('email');
                    $balance=$req->session()->get('balance');
                    $customer = Customer::where('email',$email)
                    ->first();
                    $newbalance=$balance-$req-> amount;
                    $balance=$newbalance;
                
    
                    $req->session()->put('balance', $balance);
    
                    $customer->balance = $balance;
                    $customer->save();
                    $transaction=new Customerstransaction();
                    $transaction->phone=$req->phone;
                    $transaction->email=$email;
                    $transaction->transaction_type="Money Transfer";
                    $transaction->amount=$req->amount;
                    $transaction->balance = $balance;
                    $transaction->date = now();
                    $transaction->save();
    
    
    
                    return back()->with('msg','Money Transfer Successfull') ;

                
    
                }else{
                    return back()->with('err','Incorrect Password') ;
                }

            
        }else{
            return back()->with('err','Minimum Money Transfer amount 1000 Taka') ;
        }
    }
    public function donate()
    {
        return view('pages.customer.transaction.donate');
    }
    public function donatedone(TransactionRequest $req)
    {
        if($req-> amount >1)
        {
            

                if ($req->session()->get('password')==$req-> password){
                   

                    $email=$req->session()->get('email');
                    $balance=$req->session()->get('balance');
                    $customer = Customer::where('email',$email)
                    ->first();
                    $newbalance=$balance-$req-> amount;
                    $balance=$newbalance;
                
    
                    $req->session()->put('balance', $balance);
    
                    $customer->balance = $balance;
                    $customer->save();
                    $transaction=new Customerstransaction();
                    $transaction->phone=$req->billtype;
                    $transaction->email=$email;
                    $transaction->transaction_type="Donate";
                    $transaction->amount=$req->amount;
                    $transaction->balance = $balance;
                    $transaction->date = now();
                    $transaction->save();
    
    
    
                    return back()->with('msg','Donation Successfull') ;

               
    
                }else{
                    return back()->with('err','Incorrect Password') ;
                }

            
        }else{
            return back()->with('err','Minimum Donation amount 1 Taka') ;
        }

    }


    public function ticket()
    {
        return view('pages.customer.transaction.tickets');
    }
//**************************************************************************** */
public function index()
    {
        $email='joy@gmail.com';
        $customer= DB::table('customerstransactions')->where('email', '=', $email)->get();

        return response()->json($customer);
    }
    /** 
         *@param  \Illuminate\Http\Request  $request
         * @return \Illuminate\Http\Response
         */
    public function transaction(Request $req)
    {
        $validator = Validator::make($req->all(), [
            'transaction_type' =>'required|min:3|max:30',
            'amount' =>'required',
            'password' =>'required',
            'phone'=>'required|min:11|max:15',
            'email'=>'required'

            
            ]);
             if($validator->fails()) {
                return response()->json([
                 'status' => 240,
                'message' => 'Validation Error'
                 ]);
            }
    
              else{   // $eventName = $req->input('event_name');
                $data=array();
                $data['transaction_type']=$req->transaction_type;
                $data['amount']=$req->amount;
                $data['phone']=$req->phone;
                $data['password']=$req->password;
                $data['email']=$req->email;
                $data['balance']='5000';
                $data->date = now();
                
    
                $insert_status = DB::table('customerstransactions')->insert($data);
                if($insert_status){
                   return response()->json([
                            'status' => 200,
                            'event'=> $insert_status,
                            'message' => 'User Added Successfully'
                                 ]);
                }else{
                    response()->json([
                            'status' => 202,
                            'message' => 'Something went Wrong'
                                 ]);
                }
                
            }
    }

}
