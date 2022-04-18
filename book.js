var submit = document.getElementById('submit');
const tableBody=document.querySelector('tbody');

//deleteitem

function deleteitem(el){
      if(el.classList.contains('delete')){
           el.parentElement.parentElement.remove();
           showMassage('Book Removed!!','success');
      }
}

//showMassage

 showMassage= (massage,className)=>{
      
       this.massage=massage;
       this.className=className;
       const div = document.createElement('div');
       div.className=`alert alert-${className}`;
       div.appendChild(document.createTextNode(massage));

       const container = document.querySelector('.container');
       const form = document.querySelector('form');

       container.appendChild(div);

       setTimeout(()=>document.querySelector('.alert').remove(),3000);
       
 }

//book add
submit.addEventListener('click',submitbtn);
function submitbtn(e){
      e.preventDefault();
       
      var title=document.getElementById('title');
      var author=document.getElementById('author');
      var isbn=document.getElementById('isbn');


      //select tbody
      if(title.value == ''|| author.value == ''|| isbn.value == ''){
            showMassage('Please fill in the blank box!!','danger');
      }
      else{
            
            //craete element

            var trow = document.createElement('tr');

            tableBody.appendChild(trow);
            
            trow.innerHTML = `
                  <td>${title.value}</td>
                  <td>${author.value}</td>
                  <td>${isbn.value}</td>
                  <td><a href="#" class="btn btn bg-danger text-white btn-sm delete">X</a></td>

            `;

            showMassage('Book Add!!','success');
      }

}

//deleteitems
 tableBody.addEventListener('click',(e)=>{
    deleteitem(e.target);
 })
