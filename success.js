$(      //頁面加載完執行
        $("#ajaxForm").on("submit",function () {    //表單提交時監聽提交事件
            $(this).ajaxSubmit(options);    //當前表單執行異步提交，optons 是配置提交時、提交後的相關選項
            return false;   //  必須返回false，才能跳到想要的頁面
        })
    )
    //配置 options 選項
    var options = {
        url: "/postform",       //提交地址：默認是form的action,如果申明,則會覆蓋
        type: "post",           //默認是form的method（get or post），如果申明，則會覆蓋
        success: successFun,    //提交成功後的回調函數，即成功後可以定頁面跳到哪裏
        dataType: "json",       //接受服務端返回的類型
        clearForm: true,        //成功提交後，清除所有表單元素的值
        resetForm: true,        //成功提交後，重置所有表單元素的值
        timeout: 3000           //設置請求時間，超過該時間後，自動退出請求，單位(毫秒)
    }
    //設置提交成功後返回的頁面
    function successFun(data,status) {
        $("#showForm").html(data.msg);      //提交表單後從後臺接收到的返回來的數據，我保存到了msg裏
    }