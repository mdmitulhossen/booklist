var submit = document.getElementById('submit');

submit.addEventListener('click',submitbtn);
function submitbtn(e){
      e.preventDefault();
       
      var title=document.getElementById('title');
      var author=document.getElementById('author');
      var isbn=document.getElementById('isbn');

      console.log(title.value);
      console.log(author.value);
      console.log(isbn.value);

      //select tbody

      var tableBody=document.querySelector('tbody');
      console.log(tableBody);

      //craete element

      var trow = document.createElement('tr');

      tableBody.appendChild(trow);
      
      trow.innerHTML = `
           <td>${title.value}</td>
           <td>${author.value}</td>
           <td>${isbn.value}</td>
           <td><a href="#" class="btn btn bg-danger text-white btn-sm delete">X</a></td>

        `;

}
