(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Iab2:function(t,e,a){var i,n;void 0===(n="function"==typeof(i=function(){"use strict";function e(t,e,a){var i=new XMLHttpRequest;i.open("GET",t),i.responseType="blob",i.onload=function(){c(i.response,e,a)},i.onerror=function(){console.error("could not download file")},i.send()}function a(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function i(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){var a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(a)}}var n="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,o=n.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=n.saveAs||("object"!=typeof window||window!==n?function(){}:"download"in HTMLAnchorElement.prototype&&!o?function(t,o,c){var l=n.URL||n.webkitURL,b=document.createElement("a");b.download=o=o||t.name||"download",b.rel="noopener","string"==typeof t?(b.href=t,b.origin===location.origin?i(b):a(b.href)?e(t,o,c):i(b,b.target="_blank")):(b.href=l.createObjectURL(t),setTimeout(function(){l.revokeObjectURL(b.href)},4e4),setTimeout(function(){i(b)},0))}:"msSaveOrOpenBlob"in navigator?function(t,n,o){if(n=n||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,o),n);else if(a(t))e(t,n,o);else{var c=document.createElement("a");c.href=t,c.target="_blank",setTimeout(function(){i(c)})}}:function(t,a,i,c){if((c=c||open("","_blank"))&&(c.document.title=c.document.body.innerText="downloading..."),"string"==typeof t)return e(t,a,i);var l="application/octet-stream"===t.type,b=/constructor/i.test(n.HTMLElement)||n.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||l&&b||o)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var t=d.result;t=s?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),c?c.location.href=t:location=t,c=null},d.readAsDataURL(t)}else{var r=n.URL||n.webkitURL,u=r.createObjectURL(t);c?c.location=u:location.href=u,c=null,setTimeout(function(){r.revokeObjectURL(u)},4e4)}});n.saveAs=c.saveAs=c,t.exports=c})?i.apply(e,[]):i)||(t.exports=n)},jkDv:function(t,e,a){"use strict";a.r(e),a.d(e,"AdminModule",function(){return I});var i=a("ofXK"),n=a("fXoL"),o=a("H+bZ"),c=a("tyNb"),l=a("/t3+"),b=a("bTqV"),s=a("NFeN"),d=a("XhcP"),r=a("MutI"),u=a("FKr1");let p=(()=>{class t{constructor(t,e){this.api=t,this.router=e,this.mode="side"}ngOnInit(){this.checkLogin()}checkLogin(){this.api.get("bookswithauth/status").subscribe(t=>{},t=>{this.router.navigate(["login"])})}logout(){confirm("Keluar aplikasi?")&&(localStorage.removeItem("appToken"),window.location.reload())}}return t.\u0275fac=function(e){return new(e||t)(n.Nb(o.a),n.Nb(c.a))},t.\u0275cmp=n.Hb({type:t,selectors:[["app-admin"]],decls:30,vars:8,consts:[["color","primary",1,"example-header"],["mat-icon-button","",3,"click"],[1,"uk-width-expand"],["mat-button","",3,"click"],[1,"example-container"],["mode","side","opened","",1,"sidenav-left",3,"position","fixedInViewport","fixedTopGap","fixedBottomGap"],["sidenav",""],["routerLink","/admin/dashboard"],["matListIcon",""],["matLine",""],["routerLink","/admin/product"],["mode","side",1,"example-sidenav",3,"position","fixedInViewport","fixedTopGap","fixedBottomGap"],[2,"padding","20px","background-color","#ccc"]],template:function(t,e){if(1&t){const t=n.Ub();n.Rb(0),n.Tb(1,"mat-toolbar",0),n.Tb(2,"button",1),n.ac("click",function(){return n.qc(t),n.oc(14).toggle()}),n.Tb(3,"mat-icon"),n.xc(4,"menu"),n.Sb(),n.Sb(),n.Tb(5,"span"),n.xc(6,"My Angular"),n.Sb(),n.Ob(7,"div",2),n.Tb(8,"small"),n.xc(9,"Admin"),n.Sb(),n.Tb(10,"button",3),n.ac("click",function(){return e.logout()}),n.xc(11,"Logout"),n.Sb(),n.Sb(),n.Tb(12,"mat-sidenav-container",4),n.Tb(13,"mat-sidenav",5,6),n.Tb(15,"mat-nav-list"),n.Tb(16,"mat-list-item",7),n.Tb(17,"mat-icon",8),n.xc(18,"dashboard"),n.Sb(),n.Tb(19,"h3",9),n.xc(20,"Dashboard"),n.Sb(),n.Sb(),n.Tb(21,"mat-list-item",10),n.Tb(22,"mat-icon",8),n.xc(23,"camera_enhance"),n.Sb(),n.Tb(24,"h3",9),n.xc(25,"Products"),n.Sb(),n.Sb(),n.Sb(),n.Sb(),n.Ob(26,"mat-sidenav",11,6),n.Tb(28,"mat-sidenav-content",12),n.Ob(29,"router-outlet"),n.Sb(),n.Sb(),n.Qb()}2&t&&(n.Cb(13),n.jc("position","start")("fixedInViewport",!0)("fixedTopGap",80)("fixedBottomGap",0),n.Cb(13),n.jc("position","end")("fixedInViewport",!0)("fixedTopGap",60)("fixedBottomGap",0))},directives:[l.a,b.a,s.a,d.b,d.a,r.d,r.b,c.b,r.a,u.j,d.c,c.d],styles:[".example-container[_ngcontent-%COMP%]{position:absolute;top:60px;bottom:0;left:0;right:0}.example-sidenav[_ngcontent-%COMP%]{width:400px}.example-sidenav[_ngcontent-%COMP%], .sidenav-left[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.sidenav-left[_ngcontent-%COMP%]{width:250px}"]}),t})(),h=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Hb({type:t,selectors:[["app-dashboard"]],decls:3,vars:0,template:function(t,e){1&t&&(n.Tb(0,"p"),n.xc(1,"dashboard works!"),n.Sb(),n.Ob(2,"router-outlet"))},directives:[c.d],styles:[""]}),t})();var g=a("w55g"),f=a("Iab2"),m=a("0IaG");let T=(()=>{class t{constructor(t,e,a){this.api=t,this.dialogRef=e,this.dialogData=a,this.loadingUpload=!1}ngOnInit(){console.log(this.dialogData)}onFileChange(t){t.target.files.length>0&&(this.selectedFile=t.target.files[0],console.log(this.selectedFile))}uploadFile(){let t=new FormData;t.append("file",this.selectedFile),this.loadingUpload=!0,this.api.upload(t).subscribe(t=>{this.updateProduct(t),console.log(t)},t=>{this.loadingUpload=!1,alert("Gagal mengunggah file")})}updateProduct(t){1==t.status?(this.updateBook(t),alert("File berhasil diunggah"),this.loadingUpload=!1,this.dialogRef.close()):alert(t.message)}updateBook(t){this.api.put("books/"+this.dialogData.id,{url:t.url}).subscribe(t=>{console.log(t)})}}return t.\u0275fac=function(e){return new(e||t)(n.Nb(o.a),n.Nb(m.g),n.Nb(m.a))},t.\u0275cmp=n.Hb({type:t,selectors:[["app-file-uploader"]],decls:13,vars:3,consts:[["mat-dialog-title",""],["mat-diaolog-content",""],[1,"uk-flex","uk-flex-middle","uk-flex-center",2,"height","100px","outline","2px dashed #ccc","margin","10px",3,"click"],["type","file","id","file",2,"display","none",3,"change"],["fileInput",""],["mat-dialog-actions","","align","right"],["mat-button","","mat-dialog-close",""],["mat-flat-button","","color","primary",3,"disabled","click"]],template:function(t,e){if(1&t){const t=n.Ub();n.Tb(0,"h1",0),n.xc(1,"Unggah File"),n.Sb(),n.Tb(2,"div",1),n.Tb(3,"div",2),n.ac("click",function(){return n.qc(t),n.oc(7).click()}),n.Tb(4,"span"),n.xc(5),n.Sb(),n.Sb(),n.Tb(6,"input",3,4),n.ac("change",function(t){return e.onFileChange(t)}),n.Sb(),n.Sb(),n.Tb(8,"div",5),n.Tb(9,"button",6),n.xc(10,"Cancel"),n.Sb(),n.Tb(11,"button",7),n.ac("click",function(){return e.uploadFile()}),n.xc(12),n.Sb(),n.Sb()}2&t&&(n.Cb(5),n.yc(e.selectedFile?e.selectedFile.name:"Pilih File"),n.Cb(6),n.jc("disabled",e.loadingUpload),n.Cb(1),n.yc(e.loadingUpload?"Uploading...":"Upload"))},directives:[m.h,m.c,b.a,m.d],styles:[""]}),t})();var x=a("kmnG"),S=a("qFsG"),k=a("3Pt+");let v=(()=>{class t{constructor(t,e,a){this.dialogRef=t,this.data=e,this.api=a,this.loading=!1}ngOnInit(){}saveData(){this.loading=!0,null==this.data.id?this.api.post("books",this.data).subscribe(t=>{this.dialogRef.close(t),this.loading=!1},t=>{this.loading=!1,alert("Tidak Dapat Menyimpan Data")}):this.api.put("books/"+this.data.id,this.data).subscribe(t=>{this.dialogRef.close(t),this.loading=!1},t=>{this.loading=!1,alert("Tidak Dapat Memperbaharui Data")})}}return t.\u0275fac=function(e){return new(e||t)(n.Nb(m.g),n.Nb(m.a),n.Nb(o.a))},t.\u0275cmp=n.Hb({type:t,selectors:[["app-product-detail"]],decls:32,vars:8,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["appearance","outline",2,"width","100%"],["matInput","",3,"ngModel","ngModelChange"],["matInput","","type","number",3,"ngModel","ngModelChange"],["mat-dialog-actions","","align","end"],["mat-button","","mat-dialog-close",""],["mat-flat-button","",3,"disabled","click"]],template:function(t,e){1&t&&(n.Tb(0,"h3",0),n.xc(1," Detail Produk "),n.Sb(),n.Tb(2,"div",1),n.Tb(3,"mat-form-field",2),n.Tb(4,"mat-label"),n.xc(5,"Judul"),n.Sb(),n.Tb(6,"input",3),n.ac("ngModelChange",function(t){return e.data.title=t}),n.Sb(),n.Sb(),n.Tb(7,"mat-form-field",2),n.Tb(8,"mat-label"),n.xc(9,"Penulis"),n.Sb(),n.Tb(10,"input",3),n.ac("ngModelChange",function(t){return e.data.author=t}),n.Sb(),n.Sb(),n.Tb(11,"mat-form-field",2),n.Tb(12,"mat-label"),n.xc(13,"Penerbit"),n.Sb(),n.Tb(14,"input",3),n.ac("ngModelChange",function(t){return e.data.publisher=t}),n.Sb(),n.Sb(),n.Tb(15,"mat-form-field",2),n.Tb(16,"mat-label"),n.xc(17,"Tahun Terbit"),n.Sb(),n.Tb(18,"input",3),n.ac("ngModelChange",function(t){return e.data.year=t}),n.Sb(),n.Sb(),n.Tb(19,"mat-form-field",2),n.Tb(20,"mat-label"),n.xc(21,"ISBN"),n.Sb(),n.Tb(22,"input",3),n.ac("ngModelChange",function(t){return e.data.isbn=t}),n.Sb(),n.Sb(),n.Tb(23,"mat-form-field",2),n.Tb(24,"mat-label"),n.xc(25,"Harga"),n.Sb(),n.Tb(26,"input",4),n.ac("ngModelChange",function(t){return e.data.price=t}),n.Sb(),n.Sb(),n.Sb(),n.Tb(27,"div",5),n.Tb(28,"button",6),n.xc(29,"Batal"),n.Sb(),n.Tb(30,"button",7),n.ac("click",function(){return e.saveData()}),n.xc(31),n.Sb(),n.Sb()),2&t&&(n.Cb(6),n.jc("ngModel",e.data.title),n.Cb(4),n.jc("ngModel",e.data.author),n.Cb(4),n.jc("ngModel",e.data.publisher),n.Cb(4),n.jc("ngModel",e.data.year),n.Cb(4),n.jc("ngModel",e.data.isbn),n.Cb(4),n.jc("ngModel",e.data.price),n.Cb(4),n.jc("disabled",e.loading),n.Cb(1),n.zc(" ",e.loading?"Menyimpan..":"Simpan"," "))},directives:[m.h,m.e,x.b,x.e,S.b,k.c,k.i,k.k,k.l,m.c,b.a,m.d],styles:[""]}),t})();var w=a("Xa2L"),y=a("Wp6s");function C(t,e){1&t&&(n.Tb(0,"div",2),n.Ob(1,"mat-spinner"),n.Sb())}function M(t,e){1&t&&(n.Tb(0,"mat-icon"),n.xc(1,"download"),n.Sb())}function D(t,e){if(1&t){const t=n.Ub();n.Tb(0,"tr"),n.Tb(1,"td"),n.Tb(2,"button",9),n.wc(3,M,2,0,"mat-icon",1),n.Sb(),n.Sb(),n.Tb(4,"td"),n.xc(5),n.Sb(),n.Tb(6,"td"),n.xc(7),n.Sb(),n.Tb(8,"td"),n.xc(9),n.Sb(),n.Tb(10,"td"),n.xc(11),n.Sb(),n.Tb(12,"td"),n.xc(13),n.Sb(),n.Tb(14,"td"),n.xc(15),n.Sb(),n.Tb(16,"td",7),n.Tb(17,"button",10),n.ac("click",function(){n.qc(t);const a=e.$implicit;return n.ec(2).uploadFile(a)}),n.xc(18,"Upload"),n.Sb(),n.Tb(19,"button",10),n.ac("click",function(){n.qc(t);const a=e.$implicit,i=e.index;return n.ec(2).productDetail(a,i)}),n.xc(20,"Edit"),n.Sb(),n.Tb(21,"button",11),n.ac("click",function(){n.qc(t);const a=e.$implicit,i=e.index;return n.ec(2).deleteProduct(a.id,i)}),n.xc(22),n.Sb(),n.Sb(),n.Sb()}if(2&t){const t=e.$implicit,a=e.index,i=n.ec(2);n.Cb(3),n.jc("ngIf",""!=t.url),n.Cb(2),n.yc(a+1),n.Cb(2),n.yc(t.title),n.Cb(2),n.yc(t.author),n.Cb(2),n.yc(t.publisher),n.Cb(2),n.yc(t.year),n.Cb(2),n.yc(t.price),n.Cb(6),n.jc("disabled",i.loadingDelete[a]),n.Cb(1),n.yc(i.loadingDelete[a]?"Menghapus..":"Delete")}}function j(t,e){if(1&t){const t=n.Ub();n.Tb(0,"mat-card"),n.Tb(1,"mat-card-header"),n.Tb(2,"mat-card-title"),n.xc(3),n.Sb(),n.Sb(),n.Tb(4,"mat-card-content"),n.Tb(5,"div",3),n.Ob(6,"span",4),n.Tb(7,"button",5),n.ac("click",function(){return n.qc(t),n.ec().productDetail({},-1)}),n.xc(8,"Tambah Produk"),n.Sb(),n.Sb(),n.Tb(9,"table",6),n.Tb(10,"thead"),n.Ob(11,"th"),n.Tb(12,"th"),n.xc(13,"No"),n.Sb(),n.Tb(14,"th"),n.xc(15,"Judul"),n.Sb(),n.Tb(16,"th"),n.xc(17,"Penulis"),n.Sb(),n.Tb(18,"th"),n.xc(19,"Penerbit"),n.Sb(),n.Tb(20,"th"),n.xc(21,"Tahun Terbit"),n.Sb(),n.Tb(22,"th"),n.xc(23,"ISBN"),n.Sb(),n.Tb(24,"th"),n.xc(25,"Harga"),n.Sb(),n.Tb(26,"th",7),n.xc(27,"#"),n.Sb(),n.Sb(),n.Tb(28,"tbody"),n.wc(29,D,23,9,"tr",8),n.Sb(),n.Sb(),n.Sb(),n.Sb()}if(2&t){const t=n.ec();n.Cb(3),n.yc(t.title),n.Cb(26),n.jc("ngForOf",t.books)}}const O=[{path:"",component:p,children:[{path:"dashboard",component:h},{path:"product",component:(()=>{class t{constructor(t,e){this.dialog=t,this.api=e,this.book={},this.books=[],this.loading=!1,this.loadingDelete={}}ngOnInit(){this.title="Product",this.book={title:"Angular untuk Pemula",author:"Dzaki Malik",publisher:"Sunhouse Digital",year:2021,isbn:"8298377474",price:27e4},this.getBooks()}getBooks(){this.loading=!0,this.api.get("bookswithauth").subscribe(t=>{this.books=t,this.loading=!1},t=>{this.loading=!1})}productDetail(t,e){this.dialog.open(v,{width:"400px",data:t}).afterClosed().subscribe(a=>{a&&(-1==e?this.books.push(a):this.books[e]=t)})}deleteProduct(t,e){confirm("Delete item?")&&(this.loadingDelete[e]=!0,this.api.delete("books/"+t).subscribe(t=>{this.books.splice(e,1),this.loadingDelete[e]=!1},t=>{this.loadingDelete[e]=!1,alert("Tidak Dapat Menghapus Data")}))}uploadFile(t){this.dialog.open(T,{width:"400px",data:t}).afterClosed().subscribe(t=>{})}downloadFile(t){f.saveAs("http://api.sunhouse.co.id/bookstore/"+t.url)}}return t.\u0275fac=function(e){return new(e||t)(n.Nb(m.b),n.Nb(o.a))},t.\u0275cmp=n.Hb({type:t,selectors:[["app-product"]],decls:2,vars:2,consts:[["style","height: 300px;","class","uk-flex uk-flex-center uk-flex-middle",4,"ngIf"],[4,"ngIf"],[1,"uk-flex","uk-flex-center","uk-flex-middle",2,"height","300px"],[1,"uk-flex"],[1,"uk-width-expand"],["mat-flat-button","","color","primary",3,"click"],[1,"uk-table","uk-table-middle","uk-table-divider"],["align","right"],[4,"ngFor","ngForOf"],["mat-icon-button",""],["mat-button","","color","primary",3,"click"],["mat-button","","color","warn",3,"disabled","click"]],template:function(t,e){1&t&&(n.wc(0,C,2,0,"div",0),n.wc(1,j,30,2,"mat-card",1)),2&t&&(n.jc("ngIf",e.loading),n.Cb(1),n.jc("ngIf",!e.loading))},directives:[i.k,w.b,y.a,y.c,y.e,y.b,b.a,i.j,s.a],styles:[""]}),t})()},{path:"",pathMatch:"full",redirectTo:"admin/dashboard"}]}];let I=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.Lb({type:t}),t.\u0275inj=n.Kb({imports:[[i.c,c.c.forChild(O),g.a,k.e]]}),t})()}}]);