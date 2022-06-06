function copyToClickBoard(){
    var content = document.getElementById('dado').innerHTML;

    navigator.clipboard.writeText(content)
}