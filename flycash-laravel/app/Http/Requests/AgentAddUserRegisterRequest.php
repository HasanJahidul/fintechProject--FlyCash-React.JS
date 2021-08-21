<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AgentAddUserRegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|min:3|max:30|alpha',
            'email' => 'email:rfc,dns|required|min:10|max:50|',
            'password'=> 'required|min:8|max:20',
            'password_confirmation'=> 'required|min:8|max:20',
            'phone' => 'required|min:11|numeric',
            'nid' => 'required|min:10|numeric',
            'dob' => 'required',
            'type' => 'required',
        ];
    }
}





// <div className="wrapper ">
// <div className="full-page register-page">
//   <div className="content">
//     <div className=" container">
//       <div class="row">
//         <div class="col-lg-4 col-md-6 ml-auto mr-auto">
//           <div align="center" class="card card-register card-white">
//             <div class="card-header">
//               <h1 align="center" class="card-title">
//                 {/* {msg} */}
//                 Add Customer
//               </h1>
//             </div>
//             <form onSubmit={agentAdduser} class="form" method="post">
//               <div class="card-body">
//                 <div class="input-group mb-5">
//                   <div class="input-group-prepend">
//                     <div class="input-group-text">
//                       <i class="tim-icons icon-single-02"></i>
//                     </div>
//                   </div>
//                   <input
//                     type="text"
//                     name="name"
//                     class="form-control"
//                     placeholder="Name"
//                     onChange={handleInputChange}
//                   ></input>
                  
//                 </div>
//                 <span className="text-danger">{error.name}</span>
//                 <div class="input-group">
//                   <div class="input-group-prepend">
//                     <div class="input-group-text">
//                       <i class="tim-icons icon-email-85"></i>
//                     </div>
//                   </div>
//                   <input
//                     type="email"
//                     name="email"
//                     class="form-control"
//                     placeholder="Email"
//                     onChange={handleInputChange}
//                   ></input>
                 
//                 </div>
//                 <span className="text-danger"> {error.email}</span>
//                 <div class="input-group">
//                   <div class="input-group-prepend">
//                     <div class="input-group-text">
//                       <i class="tim-icons icon-lock-circle"></i>
//                     </div>
//                   </div>
//                   <input
//                     type="password"
//                     name="password"
//                     class="form-control"
//                     placeholder="Password"
//                     onChange={handleInputChange}
//                   ></input>
                  
//                 </div>
//                 <span className="text-danger"> {error.password}</span>
//                 <div class="input-group">
//                   <div class="input-group-prepend">
//                     <div class="input-group-text">
//                       <i class="tim-icons icon-lock-circle"></i>
//                     </div>
//                   </div>
//                   <input
//                     type="password"
//                     name="password_confirmation"
//                     class="form-control"
//                     placeholder="Confirm Password"
//                     onChange={handleInputChange}
//                   ></input>
                  
//                 </div>
//                 <span className="text-danger"> {error.password_confirmation}</span>
//                 <div class="input-group">
//                   <div class="input-group-prepend">
//                     <div class="input-group-text">
//                       <i class="tim-icons icon-mobile"></i>
//                     </div>
//                   </div>
//                   <input
//                     type="digit"
//                     name="phone"
//                     class="form-control"
//                     placeholder="Phone Number"
//                     onChange={handleInputChange}
//                   ></input>
                  
//                 </div>
//                 <span className="text-danger"> {error.phone}</span>
//                 <div class="input-group">
//                   <div class="input-group-prepend">
//                     <div class="input-group-text">
//                       <i class="tim-icons icon-badge"></i>
//                     </div>
//                   </div>
//                   <input
//                     type="text"
//                     name="nid"
//                     class="form-control"
//                     placeholder="NID Number"
//                     onChange={handleInputChange}
//                   ></input>
//                 </div>
//                 <span className="text-danger"> {error.nid}</span>
//                 <div class="input-group">
//                   <div class="input-group-prepend">
//                     <div class="input-group-text">
//                       <i class="tim-icons icon-calendar-60"></i>
//                     </div>
//                   </div>
//                   <input
//                     type="date"
//                     name="dob"
//                     class="form-control"
//                     placeholder="Date of Birth"
//                     onChange={handleInputChange}
//                   ></input>
                  
//                 </div>
//                 <span className="text-danger"> {error.dob}</span>
//                 <div class="input-group">
//                   <div class="input-group-prepend">
//                     <div class="input-group-text">
//                       <i class="tim-icons icon-single-02"></i>
//                     </div>
//                   </div>
//                   <select
//                     type="text"
//                     name="type"
//                     class="form-control"
//                     placeholder="Account Type"
//                     onChange={handleInputChange}
//                   >
//                     <option
//                       value="customer"
//                       name="customer"
//                       placeholder="Account Type"
//                     >
//                       Customer
//                     </option>
//                   </select>
                  
//                 </div>
//                 <span className="text-danger"> {error.type}</span>
//               </div>
//               <div class="card-footer">
//                 <button
//                   type="submit"
//                   class="btn btn-primary btn-lg btn-block mb-5"
//                 >
//                   Add Customer
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </div>