import { Button, TextButton } from '@components/Button';
import I from '@components/Icons';
import { Label, IssueLabel } from '@components/Label';

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
          <br />
        </div>
        <div>
          <Button size="md">Medium Button</Button>
          <br />
          <Button outlined size="md">
            Outlined Medium Button
          </Button>
          <br />
          <br />
        </div>
        <div>
          <Button size="lg">Large Button</Button>
          <br />
          <Button outlined size="lg">
            Outlined Large Button
          </Button>
          <br />
          <br />
        </div>
        <div>
          <Button size="lg" disabled>
            Disabled Button
          </Button>
          <br />
          <Button outlined size="lg" disabled>
            Outlined Disabled Button
          </Button>
          <br />
        </div>
      </fieldset>

      <fieldset style={{ display: 'inline-block' }}>
        <legend>
          <h2>Text Button</h2>
        </legend>

        <div>
          <TextButton>
            <I.Plus />
            Small Button
          </TextButton>
          <br />
          <TextButton disabled>
            <I.XMark />
            Small Disabled Button
          </TextButton>
          <br />
          <TextButton size="md">
            <I.Plus />
            Medium Button
          </TextButton>
          <br />
          <TextButton size="md" disabled>
            <I.XMark />
            Medium Disabled Button
          </TextButton>
          <br />
        </div>
      </fieldset>

      <fieldset style={{ display: 'inline-block' }}>
        <legend>
          <h2>Label</h2>
        </legend>

        <div>
          <Label>레이블 예시</Label>
          <br />
          <br />
          <Label bgColor="#94f">레이블 예시</Label>
          <br />
          <br />
          <Label bgColor="#ccc" darkText>
            레이블 예시
          </Label>
        </div>
      </fieldset>

      <fieldset style={{ display: 'inline-block' }}>
        <legend>
          <h2>Issue Label</h2>
        </legend>

        <div>
          <IssueLabel />
          <br />
          <br />
          <IssueLabel closed />
        </div>
      </fieldset>
    </>
  );
}
