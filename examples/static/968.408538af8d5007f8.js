"use strict";(self.webpackChunkbooker=self.webpackChunkbooker||[]).push([[968],{6968:(X,g,i)=>{i.r(g),i.d(g,{AdminDashboardModule:()=>G});var u=i(6814),m=i(5692),o=i(5879),k=i(1919),d=i(2651);function C(t,n){if(1&t&&(o.TgZ(0,"a",3),o._uU(1),o.qZA()),2&t){const e=n.$implicit;o.Q6J("routerLink",e.route)("activated",e.isActive),o.xp6(1),o.hij(" ",e.name," ")}}const T=["*"];let f=(()=>{class t{constructor(){this.router=(0,o.f3M)(m.F0),this.links=[{name:"Po\u010detna",route:"/admin"},{name:"Knjige",route:"/admin/books"}].map(e=>({...e,isActive:!1})),this.subscription=this.router.events.subscribe(e=>{e instanceof m.m2&&(this.links=this.links.map(a=>({...a,isActive:this.activeLink?this.activeLink===a.route:a.route===e.url})))})}ngOnDestroy(){this.subscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-layout"]],inputs:{activeLink:"activeLink"},ngContentSelectors:T,decls:6,vars:1,consts:[[1,"example-container"],["mode","side","opened","",1,"w-64"],["mat-list-item","",3,"routerLink","activated",4,"ngFor","ngForOf"],["mat-list-item","",3,"routerLink","activated"]],template:function(e,a){1&e&&(o.F$t(),o.TgZ(0,"mat-drawer-container",0)(1,"mat-drawer",1)(2,"mat-nav-list"),o.YNc(3,C,2,3,"a",2),o.qZA()(),o.TgZ(4,"mat-drawer-content"),o.Hsn(5),o.qZA()()),2&e&&(o.xp6(3),o.Q6J("ngForOf",a.links))},dependencies:[u.sg,k.Hk,k.Tg,d.jA,d.kh,d.LW,m.rH],styles:[".example-container[_ngcontent-%COMP%]{height:calc(100vh - 64px);border:1px solid rgba(0,0,0,.5)}.example-sidenav-content[_ngcontent-%COMP%]{display:flex;height:100%;align-items:center;justify-content:center}.example-sidenav[_ngcontent-%COMP%]{padding:20px}.text-red-500[_ngcontent-%COMP%]{color:#f56565!important}"]}),t})(),_=(()=>{class t{constructor(){this.color="red"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-home"]],decls:3,vars:0,template:function(e,a){1&e&&(o.TgZ(0,"app-layout")(1,"p"),o._uU(2,"Test 123"),o.qZA()())},dependencies:[f]}),t})();var b=i(8503),l=i(5313);function Z(t,n){1&t&&(o.TgZ(0,"th",9),o._uU(1,"Naslov"),o.qZA())}function v(t,n){if(1&t&&(o.TgZ(0,"td",10),o._uU(1),o.qZA()),2&t){const e=n.$implicit;o.xp6(1),o.Oqu(e.title)}}function y(t,n){1&t&&(o.TgZ(0,"th",9),o._uU(1,"Autor"),o.qZA())}function A(t,n){if(1&t&&(o.TgZ(0,"td",10),o._uU(1),o.qZA()),2&t){const e=n.$implicit;o.xp6(1),o.Oqu(e.author)}}function B(t,n){1&t&&(o.TgZ(0,"th",9),o._uU(1,"Godina izdanja"),o.qZA())}function x(t,n){if(1&t&&(o.TgZ(0,"td",10),o._uU(1),o.qZA()),2&t){const e=n.$implicit;o.xp6(1),o.Oqu(e.year)}}function M(t,n){1&t&&(o.TgZ(0,"th",9),o._uU(1,"Akcije"),o.qZA())}const F=function(t){return["/admin/books",t]},N=function(t){return["/admin/books",t,"edit"]};function U(t,n){if(1&t){const e=o.EpF();o.TgZ(0,"td",10)(1,"a",11),o._uU(2,"Pregled"),o.qZA(),o.TgZ(3,"a",11),o._uU(4,"Izmena"),o.qZA(),o.TgZ(5,"a",12),o.NdJ("click",function(){const r=o.CHM(e).$implicit,s=o.oxw();return o.KtG(s.deleteBook(r.id))}),o._uU(6,"Brisanje"),o.qZA()()}if(2&t){const e=n.$implicit;o.xp6(1),o.Q6J("routerLink",o.VKq(2,F,e.id)),o.xp6(2),o.Q6J("routerLink",o.VKq(4,N,e.id))}}function w(t,n){1&t&&o._UZ(0,"tr",13)}function J(t,n){1&t&&o._UZ(0,"tr",14)}let q=(()=>{class t{constructor(e){this.booksService=e,this.books=[],this.displayedColumns=["title","author","year","actions"],this.subscription=this.booksService.getBooks().subscribe(a=>{this.books=a})}deleteBook(e){}ngOnDestroy(){this.subscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(b.y))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-books-table"]],decls:15,vars:3,consts:[["mat-table","",1,"mat-elevation-z8","w-full",3,"dataSource"],["matColumnDef","title"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","author"],["matColumnDef","year"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],[1,"text-purple-500",3,"routerLink"],[1,"text-purple-500",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,a){1&e&&(o.TgZ(0,"table",0),o.ynx(1,1),o.YNc(2,Z,2,0,"th",2),o.YNc(3,v,2,1,"td",3),o.BQk(),o.ynx(4,4),o.YNc(5,y,2,0,"th",2),o.YNc(6,A,2,1,"td",3),o.BQk(),o.ynx(7,5),o.YNc(8,B,2,0,"th",2),o.YNc(9,x,2,1,"td",3),o.BQk(),o.ynx(10,6),o.YNc(11,M,2,0,"th",2),o.YNc(12,U,7,6,"td",3),o.BQk(),o.YNc(13,w,1,0,"tr",7),o.YNc(14,J,1,0,"tr",8),o.qZA()),2&e&&(o.Q6J("dataSource",a.books),o.xp6(13),o.Q6J("matHeaderRowDef",a.displayedColumns),o.xp6(1),o.Q6J("matRowDefColumns",a.displayedColumns))},dependencies:[l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,m.rH]}),t})(),L=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-books"]],decls:7,vars:0,consts:[["routerLink","/admin/books/new",1,"text-purple-500"],[1,"max-w-5xl","w-full","mx-auto"]],template:function(e,a){1&e&&(o.TgZ(0,"app-layout")(1,"h1"),o._uU(2,"Listing Knjiga"),o.qZA(),o.TgZ(3,"a",0),o._uU(4,"Nova knjiga"),o.qZA(),o.TgZ(5,"div",1),o._UZ(6,"app-books-table"),o.qZA()())},dependencies:[m.rH,f,q]}),t})();var D=i(5861),Q=i(4504),j=i(2296),h=i(4170),S=i(2032),c=i(6223);const H=["fileInput"];let Y=(()=>{class t{constructor(e,a){this.bookService=e,this.router=a,this.book=new Q.f("","",0,0,""),this.submited=!1}onFileSelected(){const e=this.fileInput.nativeElement.files?.[0];e&&(this.book.fileMeta={file:e,path:null})}onSubmit(){var e=this;return(0,D.Z)(function*(){e.submited=!0;const a=yield e.bookService.createNewBook(e.book);e.bookService.handleFileUpload(a,e.book),e.router.navigate(["/admin/books"])})()}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(b.y),o.Y36(m.F0))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-books-form"]],viewQuery:function(e,a){if(1&e&&o.Gf(H,5),2&e){let p;o.iGM(p=o.CRH())&&(a.fileInput=p.first)}},decls:34,vars:9,consts:[[3,"ngSubmit"],["bookForm","ngForm"],[1,"w-full"],["id","title","name","title","type","text","matInput","",3,"ngModel","ngModelChange"],[1,"grid","grid-cols-2","gap-4"],["id","author","name","author","type","text","matInput","",3,"ngModel","ngModelChange"],["id","year","name","year","type","text","matInput","",3,"ngModel","ngModelChange"],["id","pages","name","pages","type","text","matInput","",3,"ngModel","ngModelChange"],["id","genre","name","genre","type","text","matInput","",3,"ngModel","ngModelChange"],["hidden","","type","file","id","file",3,"change"],["fileInput",""],[1,"flex","flex-col","space-y-4"],["type","button","mat-raised-button","",3,"click"],["id","submit","mat-flat-button","","color","primary",3,"disabled"]],template:function(e,a){if(1&e){const p=o.EpF();o.TgZ(0,"form",0,1),o.NdJ("ngSubmit",function(){return a.onSubmit()}),o.TgZ(2,"pre"),o._uU(3),o.ALo(4,"json"),o.qZA(),o.TgZ(5,"mat-form-field",2)(6,"mat-label"),o._uU(7,"Naziv"),o.qZA(),o.TgZ(8,"input",3),o.NdJ("ngModelChange",function(s){return a.book.title=s}),o.qZA()(),o.TgZ(9,"div",4)(10,"mat-form-field",2)(11,"mat-label"),o._uU(12,"Autor"),o.qZA(),o.TgZ(13,"input",5),o.NdJ("ngModelChange",function(s){return a.book.author=s}),o.qZA()(),o.TgZ(14,"mat-form-field",2)(15,"mat-label"),o._uU(16,"Godina izdanja"),o.qZA(),o.TgZ(17,"input",6),o.NdJ("ngModelChange",function(s){return a.book.year=s}),o.qZA()()(),o.TgZ(18,"div",4)(19,"mat-form-field",2)(20,"mat-label"),o._uU(21,"Strana"),o.qZA(),o.TgZ(22,"input",7),o.NdJ("ngModelChange",function(s){return a.book.pages=s}),o.qZA()(),o.TgZ(23,"mat-form-field",2)(24,"mat-label"),o._uU(25,"\u017danr"),o.qZA(),o.TgZ(26,"input",8),o.NdJ("ngModelChange",function(s){return a.book.genre=s}),o.qZA()()(),o.TgZ(27,"input",9,10),o.NdJ("change",function(){return a.onFileSelected()}),o.qZA(),o.TgZ(29,"div",11)(30,"button",12),o.NdJ("click",function(){o.CHM(p);const s=o.MAs(28);return o.KtG(s.click())}),o._uU(31," Choose File "),o.qZA(),o.TgZ(32,"button",13),o._uU(33," Dodaj "),o.qZA()()()}if(2&e){const p=o.MAs(1);o.xp6(3),o.hij("    ",o.lcZ(4,7,a.book),"\n  "),o.xp6(5),o.Q6J("ngModel",a.book.title),o.xp6(5),o.Q6J("ngModel",a.book.author),o.xp6(4),o.Q6J("ngModel",a.book.year),o.xp6(5),o.Q6J("ngModel",a.book.pages),o.xp6(4),o.Q6J("ngModel",a.book.genre),o.xp6(6),o.Q6J("disabled",!p.form.valid)}},dependencies:[j.lW,h.KE,h.hX,S.Nt,c._Y,c.Fj,c.JJ,c.JL,c.On,c.F,u.Ts]}),t})(),O=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-books-new"]],decls:7,vars:0,consts:[["activeLink","/admin/books"],[1,"max-w-4xl","w-full","mx-auto","bg-white","rounded-md","p-4","mt-8","shadow-md"],["routerLink","/admin/books",1,"text-purple-500","block"],[1,"text-center"]],template:function(e,a){1&e&&(o.TgZ(0,"app-layout",0)(1,"div",1)(2,"a",2),o._uU(3,"Nazad na listu knjiga"),o.qZA(),o.TgZ(4,"h1",3),o._uU(5,"Nova knjiga"),o.qZA(),o._UZ(6,"app-books-form"),o.qZA()())},dependencies:[m.rH,f,Y]}),t})();var I=i(6208);const z=[{path:"",pathMatch:"full",component:_},{path:"books",component:L},{path:"books/new",component:O}];let G=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[u.ez,I.m,m.Bz.forChild(z)]}),t})()}}]);