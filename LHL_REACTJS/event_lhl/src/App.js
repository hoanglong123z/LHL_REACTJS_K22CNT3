import React, { Component } from 'react'
import LHLProductJS from './Component/LHLProductJS';
import LHLProductAdd from './Component/LHLProductAdd';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products : [
        {title: 'Siêu Nhân Xanh - Hà Quốc Thành', id: 2210900039, status:1},
        {title: 'Siêu Nhân Đỏ - Lê Hoàng Long', id: 2210900037, status:2},
        {title: 'Siêu Nhân Hồng - Ngô Hoàng Minh', id: 2210900044, status:0},
        {title: 'Siêu Nhân TinyMeo - Lê Trần Khánh Duy', id: 2210900020, status:1},
      ]
    }
  }
  lhlhandleSubmit = (param)=>{
    console.log("App:",param);
    // thêm vào mảng dữ liệu products
    let {products} = this.state;
    products.push(param);
    this.setState({
      products:products
    })
  }
  render() {
    return (
      <div className='container border mt-5'>
        <h1>Lê Hoàng Long - Event Form - Render Data</h1>
        <LHLProductJS renderProducts={this.state.products}/>
        <hr/>
        <LHLProductAdd onSubmit = {this.lhlhandleSubmit}/>
      </div>
    )
  }
}
export default App;