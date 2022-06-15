import { Button } from '@components/Button';
import I from '@components/Icons';

export default function ButtonPage() {
  return (
    <>
      <fieldset style={{ display: 'inline-block' }}>
        <legend>
          <h2>Normal Button</h2>
        </legend>

        <div>
          <Button>
            <I.Plus />
            Small Button
          </Button>
          <br />
          <Button outlined>Outlined Small Button</Button>
          <br />
        </div>
        <div>
          <Button size="md">Medium Button</Button>
          <br />
          <Button outlined size="md">
            Outlined Medium Button
          </Button>
          <br />
        </div>
        <div>
          <Button size="lg">Large Button</Button>
          <br />
          <Button outlined size="lg">
            Outlined Large Button
          </Button>
          <br />
        </div>
      </fieldset>

      <fieldset style={{ display: 'inline-block' }}>
        <legend>
          <h2>Normal Button</h2>
        </legend>

        <div>
          <Button>Button</Button>
          <br />
          <Button outlined>Outlined Button</Button>
        </div>
      </fieldset>
    </>
  );
}
