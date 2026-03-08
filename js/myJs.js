// Nội dung 
const textConfig = {
  text1: "Hế luu bạn nha!",
  text2: "8/3 vui vẻ ღNgày hôm nay không bông hoa nào đẹp hơn bạn đâu <3 Chúc bạn ngày nào cũng luôn tươi tắn, xinh đẹp và tràn đầy năng lượng, mong những điều tốt đẹp nhất sẽ đến với bạn!",
  text3: "Hãy chọn cho mình 1 điều ước nhé",
  text4: "Hoan hỉ hoan hỉ ",
  text5: "Lấy chồng đại gia",
  text6: "Học giỏi",
  text7: "Viết câu thần chú hiệu nghiệm",
  text8: "Gửi thần muỗng 🐧",
  text9: "Mơ đi gà",
  text10: "Chúc bạn sớm đạt được nguyện vọng nhé :D",
  text11:
    "Đùa thôi, chúc bạn luôn xinh đẹp học giỏi, cười nhiều lên nhé!💕",
  text12: "💕",
};

// Khởi đầu
$(document).ready(function () {

  setTimeout(function () {
    firstQuestion();
    
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  // Câu hỏi đầu tiên
  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      html:`
      8/3 vui vẻ ღNgày hôm nay không bông hoa nào đẹp hơn bạn đâu <3 Chúc bạn ngày nào cũng luôn tươi tắn, xinh đẹp và tràn đầy năng lượng, mong những điều tốt đẹp nhất sẽ đến với bạn💖!
      `,
      imageUrl: "img/8-3.jpg",
      imageWidth: 400,
      imageHeight: 300,
      background: '#fff url("img/R.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
      var audio = new Audio("sound/CuteSong.mp3");
      audio.play();
    });
  }

  // Hoán đổi vị trí nút
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }

  //Di chuyển nút ngẫu nhiên
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // Chuyển hóa từ nhập của người dùng
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text9;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // Hiện thông báo 
  $("#yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    Swal.fire({
      title: textConfig.text7,
      customClass: 
                {
                  title: 'weird-title', // Lớp tùy chỉnh cho tiêu đề
                },
      html: true,
      width: 900,
      padding: "3em",
      html: "<input type='text' class='form-control' id='txtReason'  placeholder='Hehe'>",
      background: '#fff url("img/Muongsama.jpg")',
      backdrop: `
                    rgba(0,0,123,0.4)
                    url("img/Hehehe.gif")
                    left top
                    no-repeat
                  `,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text8,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          width: 900,
          confirmButtonText: textConfig.text12,
          background: '#fff url("img/heheeee.png")',
          backdrop:`
                    rgba(0,0,123,0.4)
                    url("img/Tim1.gif")
                    left top
                    no-repeat
                  `,
          title: textConfig.text10,
          text: textConfig.text11,
          confirmButtonColor: "#83d0c9",
          onClose: () => {
            window.location = "img/anhny.jpg";
          },
        });
      }
    });

    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
});


