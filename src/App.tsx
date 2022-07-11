import * as React from "react";
import {Button, defaultTheme, Flex, ProgressBar, Provider, SearchField, View} from "@adobe/react-spectrum";
import axios, {AxiosResponse} from "axios";
import {ReactElement, useEffect, useState} from "react";

interface IAppProps {
  services: IService[]
}

export interface IService {
  url: string,
  method: string,
  priority: number,
  queryTrigger: (query: string) => boolean,
  resultsMapFn: (results: any) => ReactElement
}

interface IResults {
  type: string;
  label: string;
  description: string;
  cta: string;
  icon: string;
}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function App({services}: IAppProps) {
  const [isLoading, setLoading] = useState(false);
  const [httpPromises, setHttpPromises] = useState([] as Promise<AxiosResponse>[]);
  const [httpCompletedRequestsNo, setHttpCompletedRequestsNo] = useState(0);
  const [results, setResults] = useState([] as ReactElement[]);

  function onChange(query) {

    if (services.length <= 0 && query.length < 3) {
      return;
    }

    setLoading(true);

    const promises = services
      // Filter services if the query is NOT of interest.
      // This saves HTTP requests to API.
      .filter((service) => {
        return service.queryTrigger(query);
      })
      // Perform the HTTP call.
      .map((service) => {
        return axios.request({url: service.url, method: service.method}).then((response) => {
            setTimeout(() => {
             setResults((prev) => [...prev, service.resultsMapFn(response)]);
             setHttpCompletedRequestsNo((prev) => prev + 1);
            }, randomInt(3000, 10000));
           return response;
        });
      });

    setHttpPromises(promises);

  }

  function renderLoadingProgress() {
    return (

        <ProgressBar flex
                     labelPosition="side"
                     showValueLabel={false}
                     label="Loading results..."
                     value={(httpCompletedRequestsNo / httpPromises.length) * 100}
        />

    );
  }

  function renderResults() {
    return (
      <View backgroundColor="gray-100">
        <Flex direction="column" flex gap="size-100">
          {results}
          {isLoading && renderLoadingProgress()}
        </Flex>
      </View>
    );
  }

  useEffect(() => {
    if (!httpPromises.length) {
      return;
    }

    // Promise.allSettled(httpPromises).finally(() => {
    //   setLoading(false);
    // });
    // Temporary just to simulate network latency.
    console.log(httpPromises.length, httpCompletedRequestsNo);
    if (httpPromises.length === httpCompletedRequestsNo) {
      setLoading(false);
    }
  }, [httpPromises, httpCompletedRequestsNo]);

  return (
    <Provider theme={defaultTheme} colorScheme={"light"}>
      <Flex direction="column" flex gap="size-100">
        <SearchField flex label="Search" labelPosition="side" labelAlign="end" onSubmit={onChange} description="e.g orders, products, invoices." />

        {httpPromises.length > 0 && renderResults()}
      </Flex>
    </Provider>
  );
}
