<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Officer;
use App\Models\Customer;
use Validator;
use App\Http\Requests\EditProfileRequest;
use Illuminate\Support\Facades\DB; //Import query builser 

class CustomerController extends Controller
{
    public function show()
    {
        $users= Officer::all(); //change Officer to (Customer)->tablename

        //$users = Officer::orderBy('id','DESC')->get(); //change Officer to (Agent)->tablename

        return view('pages.officer.customer.show')->with('users', $users);
    }
    // ============================ End Insert ====================================

    public function edit($id){

        $users= Officer::find($id);

        return view('pages.officer.customer.edit')->with('user', $users);
    }
// ============================ End Edit ====================================

    public function updateCustomer(Request $req)
    {
        $validator = Validator::make($req->all(), [
            'name' => 'required|min:3|max:30|alpha',
            'phone' => 'required|min:11|numeric',
        ]);

            if ($validator->fails()) {
                return response()->json([
                    'error'=> $validator->errors(),
                ]);
            }else{
                $customer= Customer::where('email',$req->email)
                ->first();
                $customer->phone = $req->phone;
                $customer->name = $req->name;
                $customer->save();
                if($customer){
                    $newData = Customer::where('email', $req->email)
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


    // ============================ End Update ====================================

    public function delete($id){
  
        $users = Officer::find($id); //change model name
        
        return view('pages.officer.customer.delete')->with('user', $users);
    }
// ============================ End Delete ====================================

    public function destroy($id){

        $users = Officer::find($id);
        $users->delete();

         return redirect()->route('customer_delete');
    }
// ============================ End Destroy ====================================

    
    public function changeCustomerPassword(){

        return view('pages.customer.profile.passwordChange');
    }
    public function editCustomerProfile(){

        return view('pages.customer.profile.edit');
    }
    public function changeCustomerPasswod(Request $req){

        if ($req->session()->get('password')==$req-> old_password)
        {
            if ($req->password== $req->password_confirmation)
            {
                dd($req);
                $email=$req->session()->get('email');
                $customer = Customer::where('email',$email)
                ->first();
                $customer->password = $req->password;
                $customer->save();
                return back()->with('msg','Password Changed') ;

            }else{
                return back()->with('msg','New password and confirm password does not match') ;
            }

        }else{
            return back()->with('msg','Current Password does not match') ;
                    
        }

    }
}
