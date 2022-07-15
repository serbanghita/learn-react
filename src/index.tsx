import * as React from "react";
import { createRoot } from 'react-dom/client';
import GlobalSearch, {IService} from "./GlobalSearch";
import {AxiosResponse} from "axios";
import {Divider, Flex, Link, Text, View, Image, Heading, Button, ButtonGroup} from "@adobe/react-spectrum";
import Download from "@spectrum-icons/workflow/Download";
import ViewedMarkAs from "@spectrum-icons/workflow/ViewedMarkAs";
import {ReactElement} from "react";
import "./GlobalSearch.css"

interface IHttpInvoice {
  invoice: string;
  order: string;
  plans: string;
  plans_image: string;
  date: string;
  amount: string;
  link:  string;
}

interface IHttpOrder {
  order: string;
  plan: string;
  plan_image: string;
  date: string;
  amount: string;
  billing_frequency: string;
  commitment_term_type: string;
  link:  string;
}

interface IHttpSitemapLink {
  label: string;
  description: string;
  icon: string;
  link: string;
}

interface ISubscription {
  "name": string;
  "commitmentTermLabel": string;
  "nextPaymentDate": string;
  "price": string;
  "icon": string;
  "entitlements": ISubscriptionEntitlement[];
}

interface ISubscriptionEntitlement {
  code: string;
  name: string;
  icon: string;
  position: number;
}

interface ISearchResultProps {
  icon: string;
  title: ReactElement;
  description: ReactElement;
  ctas?: ReactElement;
}

function SearchResultItem(props: ISearchResultProps) {
  const {icon, title, description, ctas} = props;

  return (
      <Flex direction="row" columnGap="size-100" UNSAFE_className="search-result">
          {icon && <View width="size-400" alignSelf={"center"} >
            <div className="search-result-icon"><Image src={icon} alt={""} width={"size-400"} justifySelf={"center"} alignSelf={"center"} /></div>
          </View>}
          <View flex>
            <div className="search-result-title">{title}</div>
            <div className="search-result-description">{description}</div>
          </View>
          {ctas && <View width="size-2000" UNSAFE_className="search-result-ctas">{ctas}</View>}
      </Flex>
  );
}

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
    resultsMapFn: (httpResponse: AxiosResponse) => {
      const data = httpResponse.data as IHttpInvoice[];
      return (
        <View flex key={"invoices"}>
          {data.map((result, index) => {
            const title = <Text>Invoice <Link><a href={result.link} target="_blank">{result.invoice}.pdf</a></Link> from order {result.order}</Text>;
            const description = <Text><b>Plans:</b> {result.plans} <b>Date:</b> {result.date}</Text>;
            const ctas = <ButtonGroup align={"center"} flex>
                <Button variant="secondary" isQuiet><ViewedMarkAs aria-label="View" /></Button>
                <Button variant="secondary" isQuiet><Download aria-label="Download" /></Button>
              </ButtonGroup>

            return <SearchResultItem icon={result.plans_image} title={title} description={description} ctas={ctas} key={index} />;
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
    resultsMapFn: (httpResponse: AxiosResponse) => {
      const data = httpResponse.data as IHttpOrder[];

      return (
        <View flex key={"orders"}>
          {data.map((result, index) => {
            const title = <Text>{result.plan} <Link><a href={result.link} target="_blank">{result.order}</a></Link></Text>;
            const description = <Text>Since {result.date} you are billed {result.amount} {result.billing_frequency}</Text>;
            const ctas = <ButtonGroup>
              <Button variant="secondary" isQuiet><Text>Go to invoices</Text></Button>
            </ButtonGroup>

            return <SearchResultItem icon={result.plan_image} title={title} description={description} key={index} ctas={ctas} />;
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
    resultsMapFn: (httpResponse: AxiosResponse) => {
      const data = httpResponse.data as IHttpSitemapLink[];

      return (
        <View flex key={"sitemap"}>
          {data.map((result, index) => {
            const title = <Text><Link><a href={result.link} target="_blank">{result.label}</a></Link></Text>;
            const description = <Text>{result.description}</Text>;

            return <SearchResultItem icon={result.icon} title={title} description={description} key={index} />;
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
root.render(<GlobalSearch services={services} />);
