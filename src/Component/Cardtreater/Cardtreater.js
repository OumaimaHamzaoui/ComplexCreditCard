
import React,{Component} from 'react'
import Card from '../Card/Card'

class Cardtreater extends Component {
    state = {
        CardNumber: '',
        CardHolder: '',
        VALIDTHRU: '',
    }
    onChangeHandler=(event)=>{
        let valRegEx = /^(((0)[0-9])|((1)[0-2]))(\/)\d{2}$/;

      switch(event.target.id){
      case "CardNumber": event.target.value.length>17? alert("Card Number must be 16 Characters")
      :this.setState({CardNumber:event.target.value}) ;
      break;
      case "CardHolder" : this.setState({CardHolder:event.target.value.toUpperCase()});
      break;
      case "VALIDTHRU" : valRegEx.test(event.target.value)&&this.setState({VALIDTHRU:event.target.value})
      break;
      
    }
    }
    render() {
        return (  
        <div>
            <div>
                <p>Card Number</p> <input 
                                id="CardNumber" 
                                type="number" 
                                name="CardNumber" 
                                onChange={this.onChangeHandler}/>
                <p>Card Holder</p> <input 
                                        id="CardHolder" 
                                        type="text" 
                                        name="CardHolder"
                                        maxLength={20}
                                        onChange={this.onChangeHandler}/>
                <p>VALIDTHRU</p> <input 
                                        id="VALIDTHRU" 
                                        type="text" 
                                        name="VALIDTHRU"
                                        onChange={this.onChangeHandler}/>
             </div>
            <div>
            <Card CardHolder={this.state.CardHolder} CardNumber={this.state.CardNumber} VALIDTHRU={this.state.VALIDTHRU}/> 
            </div>
        </div>
    )
}}
export default Cardtreater;

