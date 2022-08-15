function amount(cost){
  if(cost>250000 && cost<=500000){
    let c = (cost*10)/(100+cost)
    return c
  }
  else if(cost>500000 && cost<=1000000){
    let d = (cost*20)/(100+cost)
    return d
  }
  else if(cost>1000000){
    let e = (cost*30)/(100+cost)
    return e
  }
  else{
    return cost
  }
}
// let b = amount(1200000);
// console.log(b)

module.exports = amount