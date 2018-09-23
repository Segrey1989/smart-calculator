
class SmartCalculator {

  constructor(initialValue) {
    this.result = [initialValue];
  }

  valueOf(){
      var temp1, temp2, op;
      while(this.result.length > 1){
        for(var i = 0; i < this.result.length; i++){

          if(this.result[i] === '^' || this.result[i] === '*' || this.result[i] === '/' || this.result[i] === '+' || this.result[i] === '-'){

            op =  String(this.result.splice(i,1));
            temp1 = +this.result.splice(i-1, 1);
            temp2 = +this.result.splice(i-2, 1);

            switch(op){
              case '^':
              this.result.splice(i-2, 0,  Math.pow(temp2, temp1))
           break;
           case '*':
           this.result.splice(i-2, 0, temp2*temp1);
           break;
           case '/':
           this.result.splice(i-2, 0, temp2/temp1);
           break;
           case '+':
           this.result.splice(i-2, 0, temp2+temp1);
           break;
           case '-':
           this.result.splice(i-2, 0, temp2-temp1);
           break;
            }
           break;
          }
        }
      }
      return this.result[0];
    }


  add(number) {
    this.result.push(number);
    this.result.push('+');
    return this;
  }

  subtract(number) {
    this.result.push(number) ;
   this.result.push('-');
    return this;
  }

  multiply(number) {
  if(this.result[this.result.length-1] === '+' || this.result[this.result.length-1] === '-'){
    var tmp = this.result.pop();
    this.result.push(number);
    this.result.push('*');
    this.result.push(tmp);
    }else{
       this.result.push(number);
    this.result.push('*');
    }
return this;
  }

  devide(number) {
    if(this.result[this.result.length-1] === '+' || this.result[this.result.length-1] === '-'){
    var tmp = this.result.pop();
    this.result.push(number);
    this.result.push('/');
    this.result.push(tmp);
    }else{
       this.result.push(number);
    this.result.push('/');
    }
return this;
  }

  pow(number) {
      var signs = ['+', '-', '*', '/', '^']
 if(signs.indexOf(this.result[this.result.length-1]) !== -1){
    var tmp = [];
    while(signs.indexOf(this.result[this.result.length-1]) !== -1){
      tmp.unshift(this.result.pop());
    }
      this.result.push(number);
      this.result.push('^');
      this.result.push(...tmp);
    }
    else{
      this.result.push(number);
      this.result.push('^');
    }
  return this;
  }
}





module.exports = SmartCalculator;
