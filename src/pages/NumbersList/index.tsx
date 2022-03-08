import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { Button, Table, FormCheck } from 'react-bootstrap';

import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { BsTrash } from 'react-icons/bs';

import { Header } from '~/components/Header';
import { Sidebar } from '~/components/Sidebar';

import classNames from 'classnames';

const tableContainer = classNames('text-white');
const trBorderBottom = classNames('border-bottom', 'border-gray-700');

const trFromTh = classNames(
  `${trBorderBottom}`,
  'text-gray-500',
  'text-uppercase',
);

const formCheckTableCell = classNames('w-0', 'px-6');
const formCheck = classNames('w-0');
const iconButton = classNames('border-0', 'bg-transparent', 'text-warning');

export function NumbersList() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          flex="1"
          borderRadius={8}
          className={classNames('bg-gray-800', 'p-8')}
        >
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Numbers
            </Heading>

            <Button type="button" variant="primary">
              <Flex align="center">
                <Icon as={RiAddLine} fontSize="20" />
                <Text>Register new</Text>
              </Flex>
            </Button>
          </Flex>

          <Table borderless className={tableContainer}>
            <thead>
              <tr className={trFromTh}>
                <th className={formCheckTableCell}>
                  <input type="checkbox" className="form-check-input" />
                </th>
                <th>Value</th>
                <th>Monthy Price</th>
                <th>Setup Price</th>
                <th>Currency</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className={trBorderBottom}>
                <td className={formCheckTableCell}>
                  <FormCheck className={formCheck} />
                </td>
                <td>+55 84 91234-4321</td>
                <td>0.03</td>
                <td>3.40</td>
                <td>U$</td>
                <td>
                  <Button className={iconButton}>
                    <Icon as={RiPencilLine} fontSize="20" />
                  </Button>
                  <Button className={iconButton}>
                    <Icon as={BsTrash} fontSize="20" />
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  );
}
