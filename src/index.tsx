import * as React from "react";
import { createRoot } from 'react-dom/client';
import App, {IService} from "./App";
import {AxiosResponse} from "axios";
import {Divider, Link, View} from "@adobe/react-spectrum";

const services: IService[] = [
  {
    url: 'http://localhost:8080/mocks/invoices.json',
    method: 'get',
    priority: 1,
    queryTrigger: (query) => {
      const queryMatches = ["order", "orders", "invoice"];

      return (
        Boolean(query.match(new RegExp(queryMatches.join("|")))) ||
        Boolean(query.match(/INV\d+US/is))
      );
    },
    resultsMapFn: ({data}: AxiosResponse) => {
      return (
        <View flex key={"invoices"}>
          {data.map((result, index) => {
            return <React.Fragment key={index}>
              <Link>
                <a href={result.cta} target="_blank">{result.label}</a>
              </Link>
              <p>{result.description}</p>
              <Divider size="S" />
            </React.Fragment>;
          })}
        </View>
      );
    }
  },
  {
    url: 'http://localhost:8080/mocks/orders.json',
    method: 'get',
    priority: 2,
    queryTrigger: (query) => {
      const queryMatches = ["order", "orders", "invoice"];
      return (
        Boolean(query.match(new RegExp(queryMatches.join("|")))) ||
        Boolean(query.match(/AD\d+US/is))
      );
    },
    resultsMapFn: ({data}: AxiosResponse) => {
      return (
        <View flex key={"orders"}>
          {data.map((result, index) => {
            return <React.Fragment key={index}>
              <p>{result.label}</p>
              <Divider size="S" />
            </React.Fragment>;
          })}
        </View>
      );
    }
  },
  {
    url: 'http://localhost:8080/mocks/sitemap.json',
    method: 'get',
    priority: 0,
    queryTrigger: () => {
      // Always execute.
      return true;
    },
    resultsMapFn: ({data}: AxiosResponse) => {
      return (
        <View flex key={"sitemap"}>
          {data.map((result, index) => {
            return <React.Fragment key={index}>
              <p>{result.label}</p>
              <Divider size="S" />
            </React.Fragment>;
          })}
        </View>
      );
    }
  },
  {
    url: 'http://localhost:8080/mocks/subscriptions.json',
    method: 'get',
    priority: 0,
    queryTrigger: (query: string) => {
      const queryMatches = ["photoshop", "acrobat", "premiere"];
      return Boolean(query.match(new RegExp(queryMatches.join("|"))));
    },
    resultsMapFn: ({data}: AxiosResponse) => {
      return (
        <View flex key={"subscriptions"}>
          {data.map((result, index) => {
            return <React.Fragment key={index}>
              <p>{result.label}</p>
              <Divider size="S" />
            </React.Fragment>;
          })}
        </View>
      );
    }
  },
];

const container = document.getElementById('app') as HTMLElement;
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App services={services} />);
