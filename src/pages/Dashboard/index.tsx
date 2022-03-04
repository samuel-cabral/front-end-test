import { Flex, theme } from '@chakra-ui/react';
import { Container, Row, Col } from 'react-bootstrap';
import Chart from 'react-apexcharts';

import classNames from 'classnames';

import { Header } from '~/components/Header';
import { Sidebar } from '~/components/Sidebar';
import { ApexOptions } from 'apexcharts';

const series = [
  {
    name: 'sales',
    data: [31, 120, 10, 28, 61, 18, 120],
  },
];
const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2022-03-01T17:10:59.695Z',
      '2022-03-02T17:10:59.695Z',
      '2022-03-03T17:10:59.695Z',
      '2022-03-04T17:10:59.695Z',
      '2022-03-05T17:10:59.695Z',
      '2022-03-06T17:10:59.695Z',
      '2022-03-07T17:10:59.695Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const radialBarSeries = [17, 83];
const radialBarOptions: ApexOptions = {
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: '1.5rem',
        },
        value: {
          fontSize: '1rem',
          color: theme.colors.gray[100],
        },
        total: {
          show: true,
          label: 'Total',
          formatter: opts => {
            const initialValue = 0;

            return String(
              radialBarSeries.reduce(
                (previousValue, currentValue) => previousValue + currentValue,
                initialValue,
              ),
            );
          },
        },
      },
    },
  },
  labels: ['Sold', 'Available'],
};

const rowContent = classNames('flex', 'gap-4');
const colContent = classNames(
  'flex',
  'p-8',
  'pb-4',
  'bg-gray-800',
  'rounded-3',
);
const chartTitle = classNames('fs-lg');

export function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Container fluid>
          <Row className={rowContent}>
            <Col className={colContent}>
              <p className={chartTitle}> Sold in this week</p>
              <Chart
                options={options}
                series={series}
                type="area"
                height={160}
              />
            </Col>
            <Col className={colContent}>
              <p className={chartTitle}>Available for purchase</p>
              <Chart
                options={options}
                series={series}
                type="area"
                height={160}
              />
            </Col>
          </Row>
        </Container>
      </Flex>
    </Flex>
  );
}
