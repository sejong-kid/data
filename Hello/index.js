( function( $ ) { 
  $('.big ul').hide(); 
  $('.blg .menu').click(function() {
    if($(this).hasClass('active')){
      $(this).parent().next().slideUp('fast');
      $(this).removeClass('active'); 
    }else{
      $('.accordion').find('.active').parent().next().slideUp('fast'); 
      $('.accordion').find('.active').removeClass('active');
      $(this).parent().next().slideDown('fast');
      $(this).addClass('active'); 
    } 
  }); 
})( jQuery );

<div class="content">
  <div class="header">
    <div class="head">
      <div class="menu">
        <input type="checkbox" id="sideopen">
        <label for="sideopen">
        <div class="res-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        </label>
        <div class="sidebar">
          <div class="accordion"> 
            <div class="cate"> 
              <span class="menu"> 
                <a href="#" class="menulink">HELLO</a>
                <a href="javascript:void(0);" class="subopen"><span></span></a> 
              </span> 
              <ul> 
                <li>hello1</li> 
                <li>hello2</li> 
                <li>hello3</li> 
                <li>hello4</li> 
                <li>hello5</li> 
                <li>hello6</li>
              </ul> 
            </div> 
            <div class="cate"> 
              <span class="menu"> 
                <a href="#" class="menulink">GOODBYE</a> 
                <a href="javascript:void(0);" class="subopen"><span></span></a> 
              </span> 
              <ul> 
                <li>bye1</li> 
                <li>bye2</li> 
                <li>bye3</li> 
              </ul> 
            </div> 
            <div class="cate"> 
              <span class="menu"> 
                <a href="#" class="menulink">GOODNIGHT</a> 
                <a href="javascript:void(0);" class="subopen"><span></span></a> 
              </span> 
              <ul> 
                <li>goodnight1</li> 
                <li>goodnight2</li> 
                <li>goodnight3</li> 
              </ul> 
            </div> 
          </div>
        </div><!-- sidebar -->
      </div>
    </div><!-- head -->
    
  </div><!-- header -->
</div>