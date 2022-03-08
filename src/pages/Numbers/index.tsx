import { Button, Table, FormCheck } from 'react-bootstrap';
import { BsTrash } from 'react-icons/bs';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';

import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import classNames from 'classnames';

import { Header } from '~/components/Header';
import { Pagination } from '~/components/Pagination';
import { Sidebar } from '~/components/Sidebar';

const tableContainer = classNames('text-white');
const trBorderBottom = classNames('border-bottom', 'border-gray-700');

const trFromTh = classNames(
  `${trBorderBottom}`,
  'text-gray-500',
  'text-uppercase',
);

const formCheckTableCell = classNames('w-30', 'px-6');
const formCheckContainer = classNames('d-flex', 'align-items-center', 'py-1');
const iconButton = classNames('me-4', 'py-0', 'pt-1');

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
                  <FormCheck className={formCheckContainer} />
                </th>
                <th>Value</th>
                <th>Monthy Price</th>
                <th>Setup Price</th>
                <th>Currency</th>
                <th className="w-56">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className={trBorderBottom}>
                <td className={formCheckTableCell}>
                  <FormCheck className={formCheckContainer} />
                </td>
                <td>+55 84 91234-4321</td>
                <td>0.03</td>
                <td>3.40</td>
                <td>U$</td>
                <td>
                  <Flex>
                    <Button className={iconButton}>
                      <Flex>
                        <Icon as={RiPencilLine} fontSize="20" />
                        <Text ml="1">Edit</Text>
                      </Flex>
                    </Button>
                    <Button className={iconButton}>
                      <Flex>
                        <Icon as={BsTrash} fontSize="20" />
                        <Text ml="1">Delete</Text>
                      </Flex>
                    </Button>
                  </Flex>
                </td>
              </tr>
            </tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
