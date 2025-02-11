import Header from '@/components/remit/Header';
import Money from '@/components/remit/Money';
import Keypad from '@/components/remit/Keypad';
import Buttons from '@/components/remit/Buttons';

const Remit = () => {
  return (
    <div className="h-full flex-1 flex flex-col">
      <Header />
      <div className="flex flex-col flex-1">
        <Money />
        <Keypad />
        <Buttons />
      </div>
    </div>
  );
};

export default Remit;
