import React from 'react';

interface UserStatsProps {
  total: number;
  active: number;
  inactive: number;
  suspended: number;
  admins: number;
}

export const UserStats: React.FC<UserStatsProps> = ({ total, active, inactive, suspended, admins }) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
      gap: '10px',
      marginBottom: '15px'
    }}>
      <div style={{
        padding: '12px 15px',
        background: '#e3f2fd',
        border: '1px solid #90caf9',
        borderRadius: '3px'
      }}>
        <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>전체</div>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1976d2' }}>{total}</div>
      </div>

      <div style={{
        padding: '12px 15px',
        background: '#e8f5e9',
        border: '1px solid #81c784',
        borderRadius: '3px'
      }}>
        <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>활성</div>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#388e3c' }}>{active}</div>
      </div>

      <div style={{
        padding: '12px 15px',
        background: '#fff3e0',
        border: '1px solid #ffb74d',
        borderRadius: '3px'
      }}>
        <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>비활성</div>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#f57c00' }}>{inactive}</div>
      </div>

      <div style={{
        padding: '12px 15px',
        background: '#ffebee',
        border: '1px solid #e57373',
        borderRadius: '3px'
      }}>
        <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>정지</div>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#d32f2f' }}>{suspended}</div>
      </div>

      <div style={{
        padding: '12px 15px',
        background: '#f5f5f5',
        border: '1px solid #bdbdbd',
        borderRadius: '3px'
      }}>
        <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>관리자</div>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#424242' }}>{admins}</div>
      </div>
    </div>
  );
};
