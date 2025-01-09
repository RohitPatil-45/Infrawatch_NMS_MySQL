package npm.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Netflow_Sflow_Configuration")
public class NetflowSflowCollectorModel implements Serializable{
	
	private static final long serialVersionUID = -2264642949863409860L;

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID", updatable = false, nullable = false)
    private Long ID;
	
	@Column
	private String COLLECTOR;
	
	@Column
	private String DEVICE_IP;
	
	@Column
	private String TYPE;
	
	@Column
	private String PORT;

	public Long getID() {
		return ID;
	}

	public void setID(Long iD) {
		ID = iD;
	}

	public String getCOLLECTOR() {
		return COLLECTOR;
	}

	public void setCOLLECTOR(String cOLLECTOR) {
		COLLECTOR = cOLLECTOR;
	}

	public String getDEVICE_IP() {
		return DEVICE_IP;
	}

	public void setDEVICE_IP(String dEVICE_IP) {
		DEVICE_IP = dEVICE_IP;
	}

	public String getTYPE() {
		return TYPE;
	}

	public void setTYPE(String tYPE) {
		TYPE = tYPE;
	}

	public String getPORT() {
		return PORT;
	}

	public void setPORT(String pORT) {
		PORT = pORT;
	}
	
}
