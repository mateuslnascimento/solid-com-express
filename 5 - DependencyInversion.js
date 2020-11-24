'use strict';

var setResponseInState ={
    setValues: function(response){
     this.setState({
     value1: response.value1,
     value2: response.value2
     })
    }
   }

requestWithAxios("/someAddress/someResource", setResponseInState);
    function requestWithAxios(address, setResponseInState){
    axios.get("/someAddress/someResource", function (response) {
    setResponseInState.setValues(response);
 });
}
