const peoples = [
  //kişilerin bilgilerini tuttuğumuz dizi
  {name:'Gorkem', surname:'Acir',     age:22 , gender:'male' , job:'Fullstack Developer', city:'Elazig'},
  {name:'Mirac',  surname:'Kucuk',    age:28 , gender:'male' , job:'Fullstack Developer', city:'Istanbul'},
  {name:'Eyup',   surname:'Ozgul',    age:24 , gender:'male' , job:'Frontend Developer' , city:'Elazig'},
  {name:'Mehmet', surname:'Kartal',   age:21 , gender:'male' , job:'Frontend Developer' , city:'Istanbul'},
  {name:'Ali',    surname:'Kacar',    age:45 , gender:'male' , job:'Backend Developer' ,  city:'Izmir'},
  {name:'Omur',   surname:'Yilmaz',   age:33 , gender:'female',job:'Backend Developer' ,  city:'Istanbul'},
  {name:'Inci',   surname:'Ayyildiz', age:27 , gender:'female',job:'Backend Developer' ,  city:'Izmir'}
];
function groups(arr, property) 
{
  //kişinin yaşadığı şehre göre yapılan gruplandırma
  return arr.reduce(function (acc, obj) { 
    var key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

let result = groups(peoples, 'city');
console.log(result);
