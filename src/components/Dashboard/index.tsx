import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';

import { Container } from './styles';

export function Dashboard() {

  // Prop dilling - passando uma propriedade em vários níveis.

  // Contexto -> compartilharmento de estados em vários componentes da aplicação, independente de onde esses componentes estejam

  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
}