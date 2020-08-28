import { Component, OnInit, ViewChild } from '@angular/core';
import { TreeNode } from 'primeng/primeng'
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedNodes3 = [];
  cols = [
    { field: 'name', header: 'Name' },
    { field: 'size', header: 'Size' },
    { field: 'type', header: 'Type' }
  ];
  files: TreeNode[] = [
    {
      "data": {
        "name": "Documents",
        "size": "75kb",
        "type": "Folder"
      },
      "children": [
        {
          "data": {
            "name": "Work",
            "size": "55kb",
            "type": "Folder"
          },
          "children": [
            {
              "data": {
                "name": "Expenses.doc",
                "size": "30kb",
                "type": "Document"
              }
            },
            {
              "data": {
                "name": "Resume.doc",
                "size": "25kb",
                "type": "Resume"
              }
            }
          ]
        },
        {
          "data": {
            "name": "Home",
            "size": "20kb",
            "type": "Folder"
          },
          "children": [
            {
              "data": {
                "name": "Invoices",
                "size": "20kb",
                "type": "Text"
              }
            }
          ]
        }
      ]
    },
    {
      "data": {
        "name": "Pictures",
        "size": "150kb",
        "type": "Folder"
      },
      "children": [
        {
          "data": {
            "name": "barcelona.jpg",
            "size": "90kb",
            "type": "Picture"
          }
        },
        {
          "data": {
            "name": "primeui.png",
            "size": "30kb",
            "type": "Picture"
          }
        },
        {
          "data": {
            "name": "optimus.jpg",
            "size": "30kb",
            "type": "Picture"
          }
        }
      ]
    }
  ];

}
