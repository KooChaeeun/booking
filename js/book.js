$(document).ready(function(){

    //logo
    $(".logos li img").on("mouseover",function(){
        $(".logos li img").not($(this)).addClass("on");
    });
    $(".logos li img").on("mouseout",function(){
        $(".logos li img").not($(this)).removeClass("on");
    });

    //슬라이드
    $(".logos li").on("click",function(){
        $("#all").animate({
                left:"-1400px"
            },{
                complete:function(){
                var $clone=$("#all #section").first().clone();
                $("#all").append($clone);
                $("#section").first().remove();
                $("#all").css({"left":"0px"});
                },
                duration:1000
            });
        });

        $(".pn").on("click",function(){
            $("#all").animate({
                    left:"-1400px"
                },{
                    complete:function(){
                    var $clone=$("#all #section").first().clone();
                    $("#all").append($clone);
                    $("#section").first().remove();
                    $("#all").css({"left":"0px"});
                    },
                    duration:1000
                })
            });

          

       // 인원 체크      
        var $wrap = $('.totalFn'), 
        $btnMinus = $wrap.find('.minus'),
        $btnPlus = $wrap.find('.plus');
        $cell = $wrap.find('.cell');
        
        $btnMinus.on('click', function(e){
            var $this = $(this);
            var num = $this.parent().find('.num').text();
            num --;
            if (num <= 0) {
                num = 0;
            }
            $this.parent().find('.num').text(num);
            totalFn();

        var adult = $('.num').eq(0).text();
        var kids = $('.num').eq(1).text();
        var baby = $('.num').eq(2).text();
        $('.adult-total').text(adult);
        $('.kids-total').text(kids);
        $('.baby-total').text(baby);
        });

        $btnPlus.on('click', function(){
            var $this = $(this);
            var num = $this.parent().find('.num').text();
            num ++;
            
            if (4 <= num) {
                num = 4;// 최대 인원수         
            }
            $this.parent().find('.num').text(num);
            totalFn();

        var adult = $('.num').eq(0).text();
        var kids = $('.num').eq(1).text();
        var baby = $('.num').eq(2).text();
        $('.adult-total').text(adult);
        $('.kids-total').text(kids);
        $('.baby-total').text(baby);

        });

        

        function totalFn(){
            var $total = $(".totalFn .count-box")
            var total = 0;
            var $this = $(this);
            var num = $this.parent().find('.num').text();

            $total.find(".num").each(function(){ 
                total += Number($(this).text());
            });

            if (total >= 4) {
                alert('객실 인원은 최대 4명까지 가능합니다.');
                total = 4;              
            }
            if (total ==4){
                $btnPlus.prop('disabled' , true);
            }else{
                $btnPlus.prop('disabled' , false);
            }

            $(".count-total").text(total);
            
            
        };


        
});