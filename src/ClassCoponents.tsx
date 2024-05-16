import React, { Component } from 'react'
interface Props{

}
interface State{
    name :string,
    age :number,
    loading:boolean,
}
export default class classCoponents extends Component<Props,State> {

    constructor(props:Props){
        super(props)
        //khai báo state khi ở trong component
        this.state={
            name:"hoa",
            age:25,
            loading:true,
        }
    }
    componentDidMount(): void {
        console.log("chạy sau khi componet render lân đầu");
        /*
        phương thức componentDidMount được chạy sau khi componentRender
        các UI được cập nhật vào DOM
        đây là nơi lí tưởng để thực hiện các việc xử lí như cal API lấy dữ liệu và hiển thị
        */
        
    }
    //dùng các phương thức mặc định React cung cấp 
    componentWillMount(): void {
        console.log("chạy sau khi constructor khởi tạo xong giá trị state");
        /*
        trong phương thức componetWillMount có thể tính toán lại State
        những lưu ý cái thờ gian chuyển từ componentWillMount đến phương thức render rất là nhanh
        cho nên lưu ý việc cập nhật state

        */ 
    }
    handleClick=()=>{
        //khi muốn cập nhật State
        this.setState({
            count:this.state.count+1,
        })
    }
    /*

    Các phương thức cung cấp 

    */
    
    shouldComponentUpdate(): boolean {
        //bắt buộc phải return về true || false
        //nếu không gọi phương thức ra thì mặc định phương thức được trả về true
        return true
        
    }
    componentWillUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): void {
        console.log("componetDidUpdate được gọi");
        
    }
        componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
            console.log("componentDidUpdate được gọi");
            
        }
  render() {
    console.log("");
    
    /* 
    this.setState({
        name:"hồng"
    })
    */

    // console.log("componet được render lần đầu");
    
    return (
      <div>
        <p>ClassComponents</p>
        <p>xin chào {this.state.name}</p>
        <button onClick={this.handleClick}>thay đổi state</button>
      </div>
    )
  }
}
