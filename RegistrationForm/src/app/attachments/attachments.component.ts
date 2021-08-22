import { Component, OnInit } from '@angular/core';
import { FileUploadService } from './file-upload.service';


@Component({
  selector: 'app-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.css']
})
export class AttachmentsComponent implements OnInit {

  shortLink: string = "";
  loading: boolean = false; 
  file: File = null; 
 

  constructor(private fileUploadService: FileUploadService) { }

  

  ngOnInit(): void {
  }

  onChange(event) {
    this.file = event.target.files[0];
}


onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
    this.fileUploadService.upload(this.file).subscribe(
        (event: any) => {
            if (typeof (event) === 'object') {
                this.shortLink = event.link;

                this.loading = false; 
            }
        }
    );
}

}
