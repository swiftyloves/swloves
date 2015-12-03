(function (){
    var details = document.getElementById('details');
    var uls = Array.prototype.slice.call(details.children);
    var ids = uls.map(function(ul){
        if (!ul.id.match(/.+[0-9]/g)){
            return ul.id
        }
    })
    ids = ids.filter(function(n){ return n != undefined });
    console.log('ids:',ids);
    
    var button = document.getElementsByClassName('button')[0];
    console.log('button: ',button);
        console.log('ids[0]:',ids[0]);
    
    button.addEventListener('click', function() {
        console.log('ids[0]:',ids[0]);
        document.getElementById(ids[0]).scrollIntoView();
    });

    var ban = document.getElementById('banner');
    Array.prototype.slice.call(ban.children[0].children).forEach(function (li, ind) {
        if (!li.id.match(/.+[0-9]/g)){
            li.addEventListener('click',function(){
                document.getElementById(ids[ind]).scrollIntoView();
            })
        }
    });
})();