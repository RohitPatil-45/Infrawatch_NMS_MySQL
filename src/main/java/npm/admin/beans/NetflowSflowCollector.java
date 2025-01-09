package npm.admin.beans;

public class NetflowSflowCollector {
	private long id;
	private String collector;
	private String deviceIP;
	private String type;
	private String port;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getCollector() {
		return collector;
	}
	public void setCollector(String collector) {
		this.collector = collector;
	}
	public String getDeviceIP() {
		return deviceIP;
	}
	public void setDeviceIP(String deviceIP) {
		this.deviceIP = deviceIP;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getPort() {
		return port;
	}
	public void setPort(String port) {
		this.port = port;
	}
	@Override
	public String toString() {
		return "NetflowSflowCollector [id=" + id + ", collector=" + collector + ", deviceIP=" + deviceIP + ", type="
				+ type + ", port=" + port + "]";
	}
	
}
