$("#ButtonAddItem").click(fAddItem)
$("#ItemsList").on("click", '.checar' ,'button', fCheckItem)
$("#ItemsList").on("click", '.del' ,'button', fDelItem)

function fDelItem(){
    $(this).parent().parent().remove()
}

function fCheckItem(){
    $(this).parent().toggleClass('chec')
}

function fAddItem(e){
    e.preventDefault()
    let itemName = $("#newText").val()
    
    $("#ItemsList").append(
    // Inicia HTML
    ` 
    <div class="shopItem">
    <li class="lis"> 
      <p class="itemShop">${itemName}</p>
      <button class="checar" type="text">Check</button>
      <button class="del" type="text">Delete</button>
      <p></p>
    </li>
    </div>
    ` // Termina HTML
    )
}