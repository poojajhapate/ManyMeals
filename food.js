const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('mouseover', () => {
        dropdown.querySelector('.dropdown-content').style.display = 'block';
    });

    dropdown.addEventListener('mouseout', () => {
        dropdown.querySelector('.dropdown-content').style.display = 'none';
    });
});

function Categories(){
    let output1= `<div class="show">
    <section class="mega2">
        <ul>
            <li>	Main Home	</li>
    <li>	Adaptive Masonry Home	</li>
   
    <li>	Food Blog / Dark & Dark	</li>
    <li>	Numerous Recipes	</li>
    <li>	Recipes & Workshop	</li>
    <li>	Video Recipes 1	</li>
    
    <li>	Newbie Blogger	</li>
    <li>	Recipes & Shop	</li>
    <li>	Food & Photography	</li>
    
        </ul>
        
    </section>
    </div>`;
    document.getElementById('nav').innerHTML = output1;
}

function closenav(){
    document.getElementById('nav').innerHTML = '';
}
function topclose(){
    let h = window.event.clientY;
    if(h<20){
        document.getElementById('nav').innerHTML = '';
    }
}

// fist nev end
function Cummunity(){
    let output2= `<div class="show1">
    <section class="mega3">
    <ul>
        <li>	SINGLE POST	</li>
<li>	POST FORMAT	</li>
<li>	ELEMENTS	</li>
<li>	Post Template 1	</li>
<li>	Post Template 1: Left Sidebar Post Template 1: Right Sidebar	</li>
<li>	Post Template 2	</li>
<li>	Post Template 2: Left Sidebar	</li>


    </ul>
    <ul>
        <li>	Post Template 3: Left Sidebar	</li>
<li>	Standard Post	</li>
<li>	Gallery Post	</li>
<li>	Gallery Post 2	</li>
<li>	Video Post	</li>
<li>	Post Template 3: Right Sidebar	</li>
<li>	Post Template 4	</li>


    </ul>
    <ul>
        <li>	Slider Gallery	</li>
<li>	Video Block	</li>
<li>	Buttons & Dividers	</li>
<li>	Accordions & Tabs	</li>
<li>	Products Block	</li>



    </ul>
    <ul>
    <li>	Video Post 2	</li>
    <li>	Justified Gallery	</li>
<li>	Cover Block	</li>
<li>	Misc Blocks	</li>
<li>	Post Template 2: Right Sidebar	</li>
<li>	Post Template 3	</li>
</ul>
    
</section>
    </div>`;
    document.getElementById('nav').innerHTML = output2;
}
// Second nev end

// loader
function chalja(){
    setTimeout(show, 1000);
    function show(){
    document.getElementById('main').style.display="block";
    document.getElementById('img1').style.display="none"
    }
}
// loader

function Company(){
    let output2= `<div class="show1">
    <section class="mega3">
    
    <ul>
        <li>	Post Template 3: Left Sidebar	</li>
<li>	Standard Post	</li>
<li>	Gallery Post	</li>
<li>	Gallery Post 2	</li>
<li>	Video Post	</li>
<li>	Post Template 3: Right Sidebar	</li>
<li>	Post Template 4	</li>


    </ul>
    <ul>
        <li>	Slider Gallery	</li>
<li>	Video Block	</li>
<li>	Buttons & Dividers	</li>
<li>	Accordions & Tabs	</li>
<li>	Products Block	</li>



    </ul>
    <ul>
    <li>	Video Post 2	</li>
    <li>	Justified Gallery	</li>
<li>	Cover Block	</li>
<li>	Misc Blocks	</li>
<li>	Post Template 2: Right Sidebar	</li>
<li>	Post Template 3	</li>
</ul>
    
</section>
    </div>`;
    document.getElementById('nav').innerHTML = output2;
}


// third end

function Culture(){
    let output2= `<div class="show2">
    <section class="mega3">
    

    <ul>
        <li>	Slider Gallery	</li>
<li>	Video Block	</li>
<li>	Buttons & Dividers	</li>
<li>	Accordions & Tabs	</li>
<li>	Products Block	</li>
    </ul>    
</section>
    </div>`;
    document.getElementById('nav').innerHTML = output2;
}


// forth End

function Places(){
    let output2= `<div class="show2">
    <section class="mega3">
    

    <ul>
    <li>	Video Post 2	</li>
    <li>	Justified Gallery	</li>
<li>	Cover Block	</li>
<li>	Misc Blocks	</li>
<li>	Post Template 2: Right Sidebar	</li>
<li>	Post Template 3	</li>
</ul>
    
</section>
    </div>`;
    document.getElementById('nav').innerHTML = output2;
}


// form testing
function run(){
    
    let Usernam = document.getElementById('usernam').value;
   
    console.log(nam,num,Usernam,pass,cpass);
   
    if(Usernam === ''){
        alert("plese enter your name");
        document.getElementById('').focus();
        return false
  
        } 
        else if(usernam.includes ('@gmail.com'))
        { alert("please include @gmail.com"); document.getElementById('usernam').focus(); return false;
        }      
    }