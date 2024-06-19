import React from 'react'

export default function CreatePage() {
  return (
    <>

<div className="container text-center">
  <div className="row">
    <div className="col">
      <h1>Add New Blog</h1>
    </div>
  </div>
  <div className="row justify-content-center">
    <div className="col-lg-8">
    <form className="was-validated">
  <div className="mb-3">
    <textarea className="form-control" id="validationTextarea" placeholder=" Write Your Blog Title Here..." required defaultValue={""} />
    <div className="invalid-feedback">
      Please enter your Title in the textarea.
    </div>
  </div>

    
  <div className="mb-3">
    <textarea className="form-control" id="validationTextarea" placeholder=" Write Your Blog Body Here..." required defaultValue={""} />
    <div className="invalid-feedback">
      Please enter your Blog in the textarea.
    </div>
  </div>

  <div class="mb-3">
    <button class="btn btn-primary" type="submit" >Post Blog</button>
  </div>
</form>


    </div>
  </div>
</div>







    </>
  )
}
