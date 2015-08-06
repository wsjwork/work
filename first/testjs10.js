var objXMLHttp;
/**
 * ����createXMLHttpRequest����Ĵ��������ڲ�ͬ����������̶���XMLHttpRequest��֧�ֲ�һ������˴�����ʱ����Ҫ���ݲ�ͬ����������д���
 * */
function createXMLHttpRequest(){
    //����Firefox,Opera������DOM 2�淶�������
    if(window.XMLHttpRequest){
        objXMLHttp = new XMLHttpRequest();
    }
    //����IE�����
    else{
        //��IE�������ͬ��XMLHttpʵ������Ϊ����
        var MSXML = ['MSXML2.XMLHTTP.5.0', 'MSXML2.XMLHTTP.4.0', 'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP', 'Microsoft.XMLHTTP'];
        //���ζ�ÿ��XMLHttp����XMLHttpRequest����
        for(var i = 0; n< MSXML.length; i++){
            try{
                //΢��������ActiveX�ؼ�
                objXMLHttp = new ActiveXObject(MSXML[i]);
                //�����������XMLHttpRequest�����ʹ��break����ѭ��
                break;
            }catch(e){
                alert("����XMLHttpRequest����ʧ��");
            }
        }
    }
}
/**
 * ͨ��post��ʽ�ύ
 * */
function postSend(){
    var value = document.getElementById("content").value;
    alert(value);
    //��ʼ��XMLHttpRequest����
    createXMLHttpRequest();
    //���������URL
    var url = "http://192.168.0.103:8080/aaaa/AjaxServlet"
    //��������������ӣ�ʹ��post��ʽ
    objXMLHttp.open("POST", url, true);
    //post��ʽ��Ҫ����������Ϣͷ
    objXMLHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //���ô�����Ӧ�Ļص�����
    objXMLHttp.onreadystatechange = processResponse;
    //�����������ò���������������Ϊparam=value����ʽ
    objXMLHttp.send("value="+value);
}
/**
 * ͨ��GET����
 * */
function getSend(){
    var value = document.getElementById("content").value;
    //alert(value);
    //��ʼ��XMLHttpRequest����
    createXMLHttpRequest();
    alert("�����ɹ�");
    //���������URL,get��ʽ����urlƴ�Ӳ���
    var url = "http://192.168.0.103:8080/aaaa/AjaxServlet?value="+value;
    objXMLHttp.open("GET", url, true);
    //���ô�����Ӧ�Ļص�����
    objXMLHttp.onreadystatechange = processResponse;
    objXMLHttp.send(null);
}
/**
 * �趨�Ļص�����
 * */
function processResponse(){
    //��Ӧ�������Ӧ����
    if(objXMLHttp.readyState == 1){
        alert("XMLHttpRequest����ʼ��������");
    }else if(objXMLHttp.readyState == 2){
        alert("XMLHttpRequest��������������");
    }else if(objXMLHttp.readyState == 3){
        alert("XMLHttpRequest����ʼ��ȡ����������Ӧ");
    }else if(objXMLHttp.readyState == 4){
        alert("XMLHttpRequest�����ȡ��������Ӧ����");
        if(objXMLHttp.status == 200){
            //��Ϣ�Ѿ��ɹ����أ���ʼ������Ϣ
            //�Ȳ��������е�����ͷ
            var headers = objXMLHttp.getAllResponseHeaders();
            alert("���е�����ͷ= "+headers);
            //�õ����������ص���Ϣs
            var infor = objXMLHttp.responseText;
            alert("�������˵���Ӧ = "+infor);
        }else{
            alert("������ķ������˳�������");
        }
    }
}