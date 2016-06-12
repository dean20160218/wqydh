/**
 * Created by dinghao on 2016/6/12.
 */
var geoneCommon=(function(){
    /*var rootUrl= window.location.protocol+'//'+window.location.host+'/wtserver2/queryEventDetailsWeb/1.0/';*/
    return{
        /*
         * ����ҳ���AJAX����;
         */
        doAjax:function(options){
            $.ajax({
                type :options.type,
                url:options.url,
                data:{"params":options.data},
                dataType: "json",
                success : function (data){
                    options.callback(data);
                }
            });
        },
        /*
         * ��ȡURL�еĲ���;
         */
        getRequest:function(){
            var url = location.search;
            var theRequest = new Object();
            if (url.indexOf("?") != -1) {
                var str = url.substr(1);
                strs = str.split("&");
                for(var i = 0; i < strs.length; i ++) {
                    theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
                };
            };
            return theRequest;
        },
        /*
         * �������ڵĸ�ʽ;
         */
        dealData:function(futureEndDate,typeId){
            var yearMonthDaySplit = futureEndDate.split(/\s+/)
            var yearMonthDay = yearMonthDaySplit[0];
            var data = yearMonthDay.split("/")
            var yearData = data[0];
            var monthData = data[1];
            var dayData = data[2];
            if(typeId==0){
                return monthData + "." + dayData;
            }else{
                return yearData + "." + monthData + "." + dayData;
            }
        },
        /*
         * ����ҳ����ת
         */
        exchangePage:function(){
            window.location.href="https://hd.sip365.cn";
        },
    }
})();