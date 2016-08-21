import {Component,OnInit,AfterContentChecked,OnChanges} from 'angular2/core';

@Component({
  selector:'editor',
  templateUrl:'app/components/text-editor/text-editor.html',
  styleUrls:['app/components/text-editor/text-editor.css']
})
export class TextEditor implements AfterContentChecked{
  time:boolean =true;
  editorBody:any;
  editorDoc:any;
  image_select:any = false;
  source:any;
  constructor(){

    }

  /**
     *The ngAfterContentChecked is an overrided methodn defined in interface AfterContentChecked.
     *This method is called everytime view gets changed.
     */
  ngAfterContentChecked(){
    let editor:HTMLIFrameElement = <HTMLIFrameElement>document.getElementById("editor");
    this.editorDoc = editor.contentWindow.document;
    if(this.time){
      setTimeout(() => {
        this.time = false;
        this.editorBody = editor.contentWindow.document.body;
        this.editorBody.contentEditable = true;
        this.editorDoc.designMode = "on";
      }, '100');
    }
  }

  /**
     *toggleBold() method toggles bold for the selected text or at the insertion point.
     */
  toggleBold(){
      this.editorDoc.execCommand ('bold', false, null);
  }

  /**
     *toggleItalic() method toggles italics for the selected text or at the insertion point.
     */
  toggleItalic(){
      this.editorDoc.execCommand ('italic', false, null);
 }

 /**
    *toggleUnderline() method toggles underline for the selected text or at the insertion point.
    */
 toggleUnderline(){
      this.editorDoc.execCommand ('underline', false, null);
 }

 /**
    *headingh1() method defines the most important heading.
    */
 headingh1(){
   this.editorDoc.execCommand ('formatBlock', false, '<h1>');
 }

 /**
    *justifyCenter() method centers the selection or insertion point.
    */
 justifyCenter(){
   this.editorDoc.execCommand ('justifyCenter', false, null);
 }

 /**
    *justifyLeft() method justifies the selection or insertion point to the left.
    */
 justifyLeft(){
   this.editorDoc.execCommand ('justifyLeft', false, null);
 }

 /**
    *justifyRight() method right-justifies the selection or the insertion point.
    */
 justifyRight(){
   this.editorDoc.execCommand ('justifyRight', false, null);
 }

 /**
    *justifyFull() method Justifies the selection or insertion point.
    */
 justifyFull(){
   this.editorDoc.execCommand ('justifyFull', false, null);
 }

 /**
    *createLink() method creates an anchor link from the selection, only if there is a selection.
    */
 createLink(){
   let text = this.editorDoc.getSelection().toString();
   let linkURL=prompt("Enter a URL:", "http://");
   if(linkURL != null){
     this.editorDoc.execCommand ('insertHTML', true, '<a href="' + linkURL + '" target="_blank">' + text +'</a>');
   }
 }

 /**
    *indent() method Indents the line containing the selection or insertion point.
    */
 indent(){
   this.editorDoc.execCommand ('indent', false, null);
 }

 insertImage(){
    let img = document.getElementById("image")
    img.click();
  }

/**
   *readURL() methods loads the image on the editor for preview.
   */
readURL(event) {
      var reader = new FileReader();
      if (event.srcElement.files && event.srcElement.files[0]) {
      reader.onload = function (e) {
        let a = document.getElementById("blah")
             a.setAttribute('src', e.target.result)
             this.source = e.target.result;
             let editor:HTMLIFrameElement = <HTMLIFrameElement>document.getElementById("editor");
             this.editorDoc = editor.contentWindow.document;
             this.editorDoc.execCommand ('insertHTML', false, '<img src="'+ this.source + '">');
      };
      reader.readAsDataURL(event.srcElement.files[0]);
      }
    }

 /**
    *cut() method cuts the current selection and copies it to the clipboard.
    */
 cut(){
   this.editorDoc.execCommand ('cut', false, null);
 }

 /**
    *undo() method undoes the last executed command.
    */
 undo(){
   this.editorDoc.execCommand ('undo', false, null);
 }

 /**
    *redo() method redoes the previous undo command.
    */
 redo(){
   this.editorDoc.execCommand ('redo', false, null);
 }
}
