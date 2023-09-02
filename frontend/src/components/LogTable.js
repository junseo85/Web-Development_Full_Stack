import LogRow from './LogRow';
import TableHead from './TableHead';

function LogTable({ award, onDelete, onEdit}) {
    return (
        <table id="logTable">
            <caption>Studio News</caption>
            <TableHead />
            <tbody>
                {award.map((award, i) =>
                    <LogRow
                        award={award}
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit}                
                    />)}
            </tbody>
        </table>
    );
}

export default LogTable;