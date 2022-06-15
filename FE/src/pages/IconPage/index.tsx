import I from '@components/Icons';

export default function IconPage() {
  return (
    <fieldset style={{ width: 10 }}>
      <legend>
        <h2>Icon Page</h2>
      </legend>
      <div>
        로고
        <br />
        <I.Logo.Small /> <I.Logo.Big />
      </div>
      <br />

      <div>
        체크박스
        <br />
        <I.CheckBox.Initial fontSize={30} color="#123" />{' '}
        <I.CheckBox.Active fontSize={30} color="#123" />{' '}
        <I.CheckBox.Disable fontSize={30} color="#123" />
        <br />
        <I.CheckBox.Initial fontSize={30} color="#456" />{' '}
        <I.CheckBox.Active fontSize={30} color="#456" />{' '}
        <I.CheckBox.Disable fontSize={30} color="#456" />
        <br />
        <I.CheckBox.Initial fontSize={30} color="#789" />{' '}
        <I.CheckBox.Active fontSize={30} color="#789" />{' '}
        <I.CheckBox.Disable fontSize={30} color="#789" />
      </div>
      <br />

      <div>
        서클
        <br />
        <I.Circle.Plain fontSize={30} color="#123" />
        <I.Circle.Check fontSize={30} color="#123" />
        <I.Circle.Alert fontSize={30} color="#123" />
        <br />
        <I.Circle.Plain fontSize={30} color="#456" />
        <I.Circle.Check fontSize={30} color="#456" />
        <I.Circle.Alert fontSize={30} color="#456" />
        <br />
        <I.Circle.Plain fontSize={30} color="#789" />
        <I.Circle.Check fontSize={30} color="#789" />
        <I.Circle.Alert fontSize={30} color="#789" />
      </div>
      <br />

      <div>
        기타
        <br />
        <I.Search fontSize={30} color="#123" />
        <I.Smile fontSize={30} color="#123" />
        <I.Plus fontSize={30} color="#123" />
        <I.XMark fontSize={30} color="#123" />
        <I.Tag fontSize={30} color="#123" />
        <I.MileStone fontSize={30} color="#123" />
        <I.Bucket fontSize={30} color="#123" />
        <I.Edit fontSize={30} color="#123" />
        <I.Trash fontSize={30} color="#123" />
        <I.Refresh fontSize={30} color="#123" />
        <I.Calendar fontSize={30} color="#123" />
        <I.Clip fontSize={30} color="#123" />
        <br />
        <I.Search fontSize={30} color="#456" />
        <I.Smile fontSize={30} color="#456" />
        <I.Plus fontSize={30} color="#456" />
        <I.XMark fontSize={30} color="#456" />
        <I.Tag fontSize={30} color="#456" />
        <I.MileStone fontSize={30} color="#456" />
        <I.Bucket fontSize={30} color="#456" />
        <I.Edit fontSize={30} color="#456" />
        <I.Trash fontSize={30} color="#456" />
        <I.Refresh fontSize={30} color="#456" />
        <I.Calendar fontSize={30} color="#456" />
        <I.Clip fontSize={30} color="#456" />
        <br />
        <I.Search fontSize={30} color="#789" />
        <I.Smile fontSize={30} color="#789" />
        <I.Plus fontSize={30} color="#789" />
        <I.XMark fontSize={30} color="#789" />
        <I.Tag fontSize={30} color="#789" />
        <I.MileStone fontSize={30} color="#789" />
        <I.Bucket fontSize={30} color="#789" />
        <I.Edit fontSize={30} color="#789" />
        <I.Trash fontSize={30} color="#789" />
        <I.Refresh fontSize={30} color="#789" />
        <I.Calendar fontSize={30} color="#789" />
        <I.Clip fontSize={30} color="#789" />
      </div>
      <br />

      <div>
        Test
        {/* <I. fontSize={} color="#" /> */}
        {/* <I. fontSize={} color="#" /> */}
        {/* <I. fontSize={} color="#" /> */}
      </div>
    </fieldset>
  );
}
