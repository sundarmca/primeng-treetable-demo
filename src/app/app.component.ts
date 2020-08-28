import { Component, OnInit, ViewChild } from '@angular/core';
import { TreeNode } from 'primeng/primeng'
import { ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedNodes3 = [];
  cols = [
    { field: 'name', header: 'Name' },
    { field: 'size', header: 'Size' },
    { field: 'type', header: 'Type' }
  ];
  constructor(private http: HttpClient) {}
  ngOnInit() { }
  files: TreeNode[] = [
    {
      "data": {
        "name": "Section1",
        "size": "75kb",
        "type": "Folder"
      },
      "children": [
        {
          "data": {
            "name": "Work",
            "size": "55kb",
            "type": "Folder"
          }
        },
        {
          "data": {
            "name": "Home",
            "size": "20kb",
            "type": "Folder"
          }
        }
      ]
    },
    {
      "data": {
        "name": "Section2",
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
    },
    {
      "data": {
        "name": "Section3",
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
    },
    {
      "data": {
        "name": "Section4",
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
    },
    {
      "data": {
        "name": "Section5",
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
