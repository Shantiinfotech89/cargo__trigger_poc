import { Component, OnInit } from '@angular/core';
import  * as LiteGraph  from "litegraph.js";
@Component({
  selector: 'app-litegraph',
  templateUrl: './litegraph.component.html',
  styleUrls: ['./litegraph.component.css']
})
export class LitegraphComponent implements OnInit {
  Stage1tag = function () {

    
  }
  constructor() { 
    // console.log("Testy");
    // console.log(LiteGraph);
  }
  ngOnInit(): void {
   console.log("Testyss");
   var graph = new LiteGraph.LGraph();
   var canvas = new LiteGraph.LGraphCanvas("#mycanvas2", graph);
   LiteGraph.LiteGraph.registerNodeType("basic/stage1tag", Stage1tag);
    // LiteGraph.LiteGraph.registerNodeType("basic/stage2onentry", Stage2onentry );
    // LiteGraph.LiteGraph.registerNodeType("basic/emailbody", emailbody ); 
    // LiteGraph.LiteGraph.registerNodeType("basic/emailrecipient", emailrecipient ); 
    // var nodeSum_l2 = LiteGraph.LiteGraph.createNode("basic/stage1tag");
    // nodeSum_l2.pos = [100, 110];
    // graph.add(nodeSum_l2);

    // const nodeSum_l3 = LiteGraph.LiteGraph.createNode("basic/stage2onentry");
    // nodeSum_l3.pos = [400, 106];
    // graph.add(nodeSum_l3);

    // const nodeSum_l4 = LiteGraph.LiteGraph.createNode("basic/emailbody");
    // nodeSum_l4.pos = [700, 130];
    // graph.add(nodeSum_l4);
     
    // const nodeSum_l5 = LiteGraph.LiteGraph.createNode("basic/emailrecipient");
    // nodeSum_l5.pos = [1000, 100];
    // graph.add(nodeSum_l5);

    graph.start();

   
  }

  //Stage1tag() {
   // this.addInput("Tags","number");
  //   this.addInput("Tags","number");
  //   this.a4da22e13e6f =  this.addWidget("toggle",'a4da22e13e6f', true, function(v){
  //      nodeSum_l2.connect(0, nodeSum_l3,0);  
  //   }, { on: "on", off:"off"});
  //   this.a4da22e13de8f =  this.addWidget("toggle","a4da22e13de8f", false, function(v){
  //      nodeSum_l2.connect(0, nodeSum_l3,0);  
  //   }, { on: "on", off:"off"});
  //   this.a4da22e12356d =  this.addWidget("toggle","a4da22e12356d", false, function(v){
  //      nodeSum_l2.connect(0, nodeSum_l3,0);  
  //   }, { on: "on", off:"off"});
  //   this.a4da22e12724f =  this.addWidget("toggle","a4da22e12724f", true, function(v){
  //      nodeSum_l2.connect(0, nodeSum_l3,0);  
  //   }, { on: "on", off:"off"}); 
  //   this.addOutput("zone1","number");
  //  this.properties = { precision: 1 };
  //}
  // Stage1tag.title = "Tag";
  // Stage1tag.prototype.onConnectionsChange = function(inputoutput,slot,bolln,linkinfo, inputinfo ) {
   
  //     nodeSum_l3.connect(0, nodeSum_l4,0);
  //     nodeSum_l4.connect(0, nodeSum_l5,0);
  //     console.log(this.a4da22e13e6f.name +"--"+this.a4da22e13e6f.value);
  //     console.log(this.a4da22e13de8f.name +"--"+this.a4da22e13de8f.value);
  //     console.log(this.a4da22e12356d.name+"--"+this.a4da22e12356d.value);
  //     console.log(this.a4da22e12724f.name+"--"+this.a4da22e12724f.value);
 
  // }
}
