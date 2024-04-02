// ? for directed graph find route between two nodes

import { Graph } from "../../data-structures/utils/graph";
import { Queue } from "../../data-structures/utils/queue";

// * done by BFS from 2 sides

const checkRoute = (value1, value2, graph) => {
   let q1 = new Queue();
   let q2 = new Queue();
   const visited1 = {};
   const visited2 = {};

   // * add start heads to visited list
   visited1[value1] = true;
   visited2[value2] = true;

   // * add edges to queue
   if (graph.hasNode(value1)) {
      for (let edge in graph.findEdges(value1)) {
         q1.add(edge);
      }
   }
   if (graph.hasNode(value2)) {
      for (let edge in graph.findEdges(value2)) {
         q2.add(edge);
      }
   }

   // * dequeing until empty
   let nextEdge1;
   let nextEdge2;

   while (!q1.isEmpty() || !q2.isEmpty()) {
      // * if has queue, return true
      if (!q1.isEmpty()) {
         nextEdge1 = q1.remove();
         if (nextEdge1 === value2) {
            return true;
         }
         if (visited1[nextEdge1] === undefined) {
            visited1[nextEdge1] = true;
            if (graph.hasNode(nextEdge1)) {
               for (let edge in graph.findEdges(nextEdge1)) {
                  q1.add(edge);
               }
            }
         }
      }
      if (!q2.isEmpty()) {
         nextEdge2 = q2.remove();
         if (nextEdge2 === value1) {
            return true;
         }
         if (visited2[nextEdge2] === undefined) {
            visited2[nextEdge2] = true;
            if (graph.hasNode(nextEdge2)) {
               for (let edge in graph.findEdges(nextEdge2)) {
                  q2.add(edge);
               }
            }
         }
      }
   }
   return false;
};

/* TEST */
var graph = new Graph();
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");

graph.addEdge("D", "E");

console.log(checkRoute("A", "C", graph), true);
console.log(checkRoute("A", "E", graph), false);
console.log(checkRoute("B", "A", graph), true);
console.log(checkRoute("D", "E", graph), true);
