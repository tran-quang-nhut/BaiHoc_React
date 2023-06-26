import React, { Component } from 'react'

export default class FormProduct extends Component {
    state = {
        value: {
            id: '',
            image: '',
            name: '',
            productType: '',
            price: '',
            descrip: '',  
        },
        // errors chứa các giá trị chuỗi cảnh báo cho người dùng khi check validation
    errors: {
        id: '',
        image: '',
        name: '',
        productType: '',
        price: '',
        descrip: '',
        },        
        // activeButton sẽ là state giúp thay đổi trạng thái disable của button submit
        activeButton: true,
    };

    getValueInput = (event) => {
        let { value, id } = event.target;
        // this.setState({
        //     [id]: value,
        // });

        // ------------------------------------
        // this.setState({
        //     ...this.state.value, [id]: value
        //  });

        // ----------------------------------------
        // tạo ra một newValue lấy giá trị từ state.values
        let newValue = this.state.value;
        newValue[id] = value;

        // console.log(newValue);
        
        // validation : check rỗng, check ký tự và check số,
        let newError = this.state.errors;

         // lấy data attibute được tạo ra ta dùng cú pháp event. target.getAttribute
         let type = event.target.getAttribute("data-type");
         console.log(type);

        // Check Rỗng
        if (newValue[id] == "") {
            newError[id] = `${id} không được để rỗng`;
            // this.state.errors.id = `${id} không được để rỗng`;
        }   else {
            newError[id] = '';
            // check ký tự số
            // let regexNumber = /[0-9]/g;
            // if(type == "number") {
            //     let result = regexNumber.test(newValue[id]);
            //     console.log(result);
            //     if (!result) {
            //         newError[id] = `${id} phải là số`;
            //     };
            // }
            switch (type) {
                case 'number':
                {
                    let regexNumber = /^[0-9]*$/;
                    let result = regexNumber.test(newValue[id]);
                    // if (!result) {
                    //   newError[id] = `${id} phải là số`;
                    // }
                    newError[id] = result ? '' : id + 'phải là số';
                }
                break;
                case "letter": {
                    let regexLetter = /^[\p{L} ]+$/u;
                    let result = regexLetter.test(newValue[id]);
                    // if (!result) {
                    //     newError[id] = `${id} phải là chữ`;
                    // }
                    newError[id] = result ? '' : id + 'phải là chữ';
                }
                break;
            }
        }

        // check người dùng đã fill hết dữ liệu vào các input
        // check validation : check người dùng không bị lỗi, cụ thể các thuộc tính trong error của state sẽ là chuỗi rỗng
        let valid = false;
        // dùng vòng lặp
        for (let item in newError) {
          // ở đây check nếu thuộc tính trong error mà có chuỗi hoặc các input chưa có dữ liệu thì sẽ set valid = true
          if (this.state.errors[item] !== "" || this.state.values[item] == "") {
            valid = true;
          }
        }
        console.log(valid);

        this.setState({
            values: newValue,
            errors: newError,
        });
    };

    handleSubmit = (event) => {
        // chạy một phương thức giúp chặn browser reload lại trang
        event.preventDefault();
        console.log(this.state.value);
    };

  render() {
    // console.log(this.state)
    // bóc tách các thuộc tính lưu các giá trị cảnh báo khi người dùng nhập chưa đúng
    const { id, descrip, image, name, price, productType } = this.state.errors;
    return (
      <div>
        <form onSubmit={this.handleSubmit} class="card text-white bg-dark bg-opacity-50">
            <div class="card-body">
              <div className="row mb-3">
                <div className="col-6">
                  <label htmlFor="">Id</label>
                  <input 
                //   onChange={(event) => {
                //     // lấy dữ liệu từ người dùng
                //     // event.target giúp trỏ tới thẻ đang có sự kiện
                //     // let data = event.target.value;
                //     // console.log(data)
                //     // this.setState ({
                //     //     id: data,
                //     // });
                //     let { value, id } = event.target;
                //     this.setState({
                //         [id]: value,
                //     })
                //   }}
                onChange={this.getValueInput}
                  className="form-control" type="text" id="id" />
                  <p>{id}</p>
                </div>
                <div className="col-6">
                  <label htmlFor="">Image</label>
                  <input 
                   onChange={this.getValueInput}
                  className="form-control" type="text" id="image" />   
                  <p>{image}</p>               
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-6">
                  <label htmlFor="">Name</label>
                  <input
                   onChange={this.getValueInput}
                   className="form-control" type="text"
                   // data-type mà có giá trị letter thì chỉ cho nhập chữ
                  data-type="letter" id="name" />
                   <p>{name}</p>
                </div>
                
                <div className="col-6">
                  <label htmlFor="">Product Type</label>
                  <input
                    onChange={this.getValueInput}
                    className="form-control"
                    type="text"
                    id="productType"
                  />
                  <p>{productType}</p>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-6">
                  <label htmlFor="">Price</label>
                  <input onChange={this.getValueInput} className="form-control" type="text" data-type="number" id="price" />
                  <p>{price}</p>
                </div>
                
                <div className="col-6">
                  <label htmlFor="">Description</label>
                  <input onChange={this.getValueInput} className="form-control" type="text" id="descrip" />
                  <p>{descrip}</p>
                </div>
              </div>
            </div>
            <div className='card-footer'>
                <button disabled={this.state.activeButton} className='btn btn-primary me-3' type='submit'>Tạo sản phẩm</button>
                <button className='btn btn-warning'>Cập nhật</button>
            </div>
          </form>
      </div>
    );
  }
}
